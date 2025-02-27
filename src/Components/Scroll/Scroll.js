import "./scroll.css"
import { useState } from "react";
import { lazy,Suspense } from "react";
import Loading from "../Loading.js";
const LazyImageLoad=lazy(()=> import ("./../LazyImage.js"));
function ImageScroll({ Images = null }) {
    const [index, setIndex] = useState(0); // the Image to load
    if (Images === null) { return <></> }
    var maxImage = 0;
    maxImage = Images.length;

    function OnNext() {

        if (index + 1 > maxImage - 1) {
            //if next index greter than last index set index to 0 to create infinite scroll 
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function OnPrevious() {

        if (index - 1 < 0) {
            //if previous index less than 0 set index to last index to create infinite scroll
            setIndex(maxImage - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    return (


        <div id="Scroll_Viewport">
            <button id="Scroll_Btn_Prev" onClick={OnPrevious}>&lt;</button>
            <Suspense fallback={<Loading />}>
            <LazyImageLoad key={Images[index].id} id={"Scroll_Content"} src={require(`./../../Assets/Images/${Images[index].src}`)} />
                {/* <div id="Scroll_Overlay"><h4>{Images[index].des}</h4></div> 
{/*                 
            </img> */}
            </Suspense>
            <button id="Scroll_Btn_Next" onClick={OnNext}>&gt;</button>
            
        </div>
    );
}


export default ImageScroll;