import ImageCarousel from "../ImageCarousel/index.jsx";
import ColumnImageGallery from "../ColumnImageGallery/index.jsx";
import React from "react";

const GalleryPage = () => {
    return(
        <>
            <div className="min-h-screen pt-20 bg-dark-secondary flex flex-col justify-center items-center" >

                <h2 className = "text-3xl lg:text-5xl text-primary-text-dark neon-border-bottom border-accent mb-5  " >Portfolio</h2>



                {/*<ImageCarousel/>*/}
                <ColumnImageGallery/>




            </div>

        </>
    )

}

export default GalleryPage;