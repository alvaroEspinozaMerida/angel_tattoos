// ImageGrid.jsx
import React from 'react';
import "./ImageGrid.scss"
const ImageGrid = ({ images }) => {
    return (
        <div className="pe-8 lg:p-0 grid grid-cols-2 grid-rows-2 lg:grid-cols-3">
            {images.map((image, index) => (
                <div key={index} className="relative">
                    <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-auto" />
                    <a href={image.link} className="absolute inset-0 flex justify-center items-center" >
                        <div className="image_grid_button ">
                            <span className="text-white text-lg font-bold justify-center items-center  ">{image.details}<br/>View More</span>
                        </div>

                    </a>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
