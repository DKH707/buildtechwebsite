import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';

const ImageItem = ({ src, alt, onClick }) => {
    const [loaded, setLoaded] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
                aspectRatio: "1/1", // Force square aspect ratio
                width: "100%",
            }}
            onClick={onClick}
        >
            {inView && (
                <motion.img
                    src={src}
                    alt={alt || "Gallery image"}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: loaded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                />
            )}
            {!loaded && inView && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
        </div>
    );
};

// Modal component for fullscreen view
const ImageModal = ({ image, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-4/5 h-4/5 max-w-6xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image.src}
                    alt={image.alt || "Full size image"}
                    className="w-full h-full object-contain"
                />
                <button
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

// Custom scrollbar-free grid component to replace react-window's FixedSizeGrid
const ScrollFreeGrid = ({ children, columnCount, rowCount, columnWidth, rowHeight }) => {
    const gridItems = [];

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const index = rowIndex * columnCount + columnIndex;

            gridItems.push(
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: columnIndex * columnWidth,
                        top: rowIndex * rowHeight,
                        width: columnWidth,
                        height: rowHeight,
                    }}
                >
                    {children({ columnIndex, rowIndex, style: {} })}
                </div>
            );
        }
    }

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: rowCount * rowHeight,
            }}
        >
            {gridItems}
        </div>
    );
};

const Gallery = ({ images, columnCount = 3 }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 1200 });
    const containerRef = useRef(null);

    // Calculate dimensions based on container size
    useEffect(() => {
        if (containerRef.current) {
            const updateDimensions = () => {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                });
            };

            updateDimensions();
            window.addEventListener('resize', updateDimensions);

            return () => window.removeEventListener('resize', updateDimensions);
        }
    }, [containerRef]);

    // Calculate grid dimensions
    const rowCount = Math.ceil(images.length / columnCount);
    const cellWidth = dimensions.width / columnCount;
    const cellHeight = cellWidth;

    const openModal = useCallback((image) => {
        setSelectedImage(image);
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        setTimeout(() => setSelectedImage(null), 300);
    }, []);

    // Cell renderer for virtualized grid
    const Cell = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;

        if (index >= images.length) return null;

        const image = images[index];

        return (
            <div style={{
                ...style,
                padding: 8,
            }}>
                <ImageItem
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openModal(image)}
                />
            </div>
        );
    };

    return (
        <div ref={containerRef} className="w-full">
            <ScrollFreeGrid
                columnCount={columnCount}
                columnWidth={cellWidth}
                rowCount={rowCount}
                rowHeight={cellHeight}
            >
                {Cell}
            </ScrollFreeGrid>

            <AnimatePresence>
                {modalOpen && (
                    <ImageModal
                        image={selectedImage}
                        isOpen={modalOpen}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;