import { useState } from "react";
import "./gallery.css"
import ImageScroll from "../../Components/Scroll/Scroll";
function Gallery() {



    // Data of the images
    var images = [
        {
            id: 0,
            des: "Corporate Headshot",
            src: "Gallery/1.jpg"
        },
        {
            id: 1,
            des: "UL campus",
            src: "Gallery/2.jpg"
        },
        {
            id: 2,
            des: "Limerick City",
            src: "Gallery/3.jpg"
        },
        {
            id: 3,
            des: "Gang",
            src: "Gallery/4.jpg"
        },
        {
            id: 4,
            des: "Aisle of poison plants",
            src: "Gallery/5.jpg"
        },
        {
            id: 5,
            des: "Black valley",
            src: "Gallery/6.jpg"
        },
        {
            id: 6,
            des: "Murral",
            src: "Gallery/7.jpg"
        },
        {
            id: 7,
            des: "Estate fountain",
            src: "Gallery/8.jpg"
        },
        {
            id: 8,
            des: "Night sky",
            src: "Gallery/9.jpg"
        },
        {
            id: 9,
            des: "Feline supermacy",
            src: "Gallery/10.jpg"
        }
    ];

    //Loads nextImage 


    return (
        <>
            <div id="galleryView">
                <h2 id="Container" >pictures</h2>
                <ImageScroll Images={images}></ImageScroll>
                <h2 id="Container" >Video</h2>
                <iframe id="YoutubePlayer" width="560" height="315" src="https://www.youtube.com/embed/51YGQZ-WkUk?si=ih6cUIwVS2vy83XB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </>
    );
}
export default Gallery;
