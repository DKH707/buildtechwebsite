import React, { useState, useEffect, useRef } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeFirebase } from "../helpers/FirebaseInitialization";
import { useLoadingContext } from "../helpers/LoadingContext";

export default function CoffeePage() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const { setIsLoading } = useLoadingContext();
    const imagesPerPage = 12; // More images per page for a nicer grid
    const allImageRefsRef = useRef([]);
    const cachedUrlsRef = useRef({});
    
    useEffect(() => {
        setIsLoading(true);
        
        initializeFirebase();
        const storage = getStorage();
        const listRef = ref(storage, 'images/webp');
        
        listAll(listRef)
            .then((res) => {
                allImageRefsRef.current = res.items;
                setTotalPages(Math.ceil(res.items.length / imagesPerPage));
                
                return loadPage(1, res.items);
            })
            .then((urls) => {
                setImages(urls);
                setIsLoading(false);
                
                // Preload next page
                if (allImageRefsRef.current.length > imagesPerPage) {
                    preloadPage(2);
                }
            })
            .catch((error) => {
                console.error("Error listing images: ", error);
                setIsLoading(false);
            });
    }, [setIsLoading]);
    
    const loadPage = async (pageNum, itemRefs = allImageRefsRef.current) => {
        const startIndex = (pageNum - 1) * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, itemRefs.length);
        
        // Use cached URLs if available
        if (cachedUrlsRef.current[pageNum]) {
            return cachedUrlsRef.current[pageNum];
        }
        
        const itemsToFetch = itemRefs.slice(startIndex, endIndex);
        const promises = itemsToFetch.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(promises);
        
        // Cache the URLs
        cachedUrlsRef.current[pageNum] = urls;
        return urls;
    };
    
    const preloadPage = async (pageNum) => {
        if (cachedUrlsRef.current[pageNum]) return;
        
        try {
            const urls = await loadPage(pageNum);
            cachedUrlsRef.current[pageNum] = urls;
            
            // Preload images by creating Image objects
            urls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        } catch (error) {
            console.error("Error preloading page", pageNum, error);
        }
    };
    
    const changePage = async (newPage) => {
        if (newPage === currentPage) return;
        
        if (!cachedUrlsRef.current[newPage]) {
            setIsLoading(true);
        }
        
        try {
            const urls = await loadPage(newPage);
            setImages(urls);
            setCurrentPage(newPage);
            
            // Preload adjacent pages
            if (newPage < totalPages) preloadPage(newPage + 1);
            if (newPage > 1) preloadPage(newPage - 1);
        } catch (error) {
            console.error("Error fetching page: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-text">Coffee Gallery</h1>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 min-h-[600px]">
                {images.map((url, index) => (
                    <div 
                        key={index} 
                        className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                        onClick={() => setSelectedImage(url)}
                    >
                        <div className="aspect-square overflow-hidden">
                            <img 
                                src={url} 
                                alt={`Coffee ${index + 1}`} 
                                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination with page numbers */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-1">
                    <button 
                        onClick={() => changePage(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded bg-secondary text-text disabled:opacity-50"
                    >
                        &laquo;
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        // Show limited page numbers for better UI
                        if (
                            pageNum === 1 || 
                            pageNum === totalPages || 
                            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                        ) {
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => changePage(pageNum)}
                                    className={`px-3 py-2 rounded ${
                                        currentPage === pageNum 
                                        ? 'bg-accent text-white' 
                                        : 'bg-secondary text-text hover:bg-accent/70'
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        } else if (
                            pageNum === currentPage - 2 || 
                            pageNum === currentPage + 2
                        ) {
                            return <span key={pageNum} className="px-2 py-2">...</span>;
                        }
                        return null;
                    })}
                    
                    <button 
                        onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded bg-secondary text-text disabled:opacity-50"
                    >
                        &raquo;
                    </button>
                </div>
            )}
            
            {/* Enhanced lightbox with navigation */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-4xl max-h-[90vh] p-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage} 
                            alt="Selected coffee" 
                            className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl" 
                        />
                        <button 
                            className="absolute top-2 right-2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        
                        {/* Find index of current image and enable navigation */}
                        {images.length > 1 && (
                            <>
                                <button 
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const currentIndex = images.indexOf(selectedImage);
                                        const prevIndex = (currentIndex - 1 + images.length) % images.length;
                                        setSelectedImage(images[prevIndex]);
                                    }}
                                >
                                    &lsaquo;
                                </button>
                                <button 
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const currentIndex = images.indexOf(selectedImage);
                                        const nextIndex = (currentIndex + 1) % images.length;
                                        setSelectedImage(images[nextIndex]);
                                    }}
                                >
                                    &rsaquo;
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
            
            {images.length === 0 && (
                <p className="text-text text-center py-8">No images found.</p>
            )}
        </div>
    );
}