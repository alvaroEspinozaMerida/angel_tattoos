// ImageGrid.jsx
import React from 'react';
import "./ImageGrid.scss"
const ImageGrid = ({ images, details}) => {
    return (
        <div className="lg:p-0 grid grid-cols-2 lg:grid-cols-3">
            {images.map((url, index) => (
                <div key={index} className="relative h-96">

                    <img src={url} alt={`Image 11`} className="w-full h-full object-cover" />
                    <a href="/portfolio" className="absolute inset-0 flex justify-center items-center" >
                        <div className="image_grid_button ">
                            <span className="text-white text-lg font-bold justify-center items-center  ">
                                {details[index]}<br/>View More
                            </span>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
