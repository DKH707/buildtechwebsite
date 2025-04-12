import React, { useState, useEffect } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeFirebase } from "../helpers/FirebaseInitialization";
import { useLoadingContext } from "../helpers/LoadingContext";
import Gallery from "./Gallery";

export default function CoffeePage() {
    const [images, setImages] = useState([]);
    const { isLoading, setIsLoading } = useLoadingContext();
    const [error, setError] = useState(null);
    const storagePath = 'images/webp'

    useEffect(() => {
        setIsLoading(true);
        initializeFirebase();
        const fetchImagesFromFirebase = async () => {
            try {
                // Initialize Firebase Storage
                const storage = getStorage();

                // Create a reference to the storage path where your images are stored
                const storageRef = ref(storage, storagePath);

                // List all items in the specified path
                const result = await listAll(storageRef);

                // Get download URLs for each item
                const imagePromises = result.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return {
                        src: url,
                        alt: item.name,
                        name: item.name,
                    };
                });

                // Wait for all URLs to be fetched
                const imageList = await Promise.all(imagePromises);

                setImages(imageList);
                setIsLoading(false);
            } catch (err) {
                console.error("Error fetching images from Firebase:", err);
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchImagesFromFirebase();
    }, [storagePath, setIsLoading]);

    if (error) {
        return <div className="text-red-500 p-4">Error loading images: {error}</div>;
    }

    return (
        !isLoading &&
        <div className="relative isolate overflow-hidden bg-bground px-6 py-20 sm:py-20 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-bground">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div>
                <h1 className="text-3xl mb-5 text-text font-bold">Digital Espresso</h1>
                <h1 className="text-2xl mb-5 text-accent font-semibold">A gallery of the fuel I make before/during development sessions</h1>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Gallery images={images} columnCount={3} />
            </div>
        </div>
    );
}