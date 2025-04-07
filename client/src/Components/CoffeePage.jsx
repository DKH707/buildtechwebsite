import React, { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeFirebase } from "../helpers/FirebaseInitialization";
import { useLoadingContext } from "../helpers/LoadingContext";

export default function CoffeePage() {
    const [images, setImages] = useState([]);
    const { setIsLoading } = useLoadingContext();
    
    useEffect(() => {
        // Show loader while fetching images
        setIsLoading(true);
        
        initializeFirebase();
        const storage = getStorage();
        const listRef = ref(storage, 'images/');
        
        listAll(listRef)
            .then((res) => {
                const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
                return Promise.all(promises);
            })
            .then((urls) => {
                setImages(urls);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error listing images: ", error);
                setIsLoading(false);
            });
    }, [setIsLoading]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-text">Coffee Gallery</h1>
            
            <PhotoProvider>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((url, index) => (
                        <PhotoView key={index} src={url}>
                            <div className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={url} 
                                    alt={`Coffee ${index + 1}`} 
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
            
            {images.length === 0 && (
                <p className="text-text text-center py-8">No images found.</p>
            )}
        </div>
    );
}