// ImageGrid.jsx
import React from 'react';

const ImageGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-3 grid-rows-2">
            {images.map((image, index) => (
                <div key={index} className="relative flex justify-center items-center">
                    <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-auto" />
                    <a href={image.link} className="absolute inset-0 flex justify-center items-center" >
                        <div className="w-4/5 h-4/5 bg-black bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
                            <span className="text-white text-lg font-bold">View More</span>
                        </div>

                    </a>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
