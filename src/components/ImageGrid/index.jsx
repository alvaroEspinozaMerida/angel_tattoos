// ImageGrid.jsx
import React from 'react';
import "./ImageGrid.scss"
const ImageGrid = ({ images }) => {
    return (
        <div className="lg:p-0 grid grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
                <div key={index} className="relative h-96">

                    <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
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
