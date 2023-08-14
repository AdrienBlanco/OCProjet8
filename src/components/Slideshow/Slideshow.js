import arrowLeft from "../../assets/arrow-back.png";
import arrowRight from "../../assets/arrow-forward.png";
import { useState } from "react";

export default function Slideshow({ pictures, title }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex - 1);
            if (currentIndex === 0) {
                setCurrentIndex(pictures.length - 1);
            }
        }
    }

    const nextSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex + 1);
            if (currentIndex === pictures.length - 1) {
                setCurrentIndex(0);
            }
        }
    }

    return (
        <div className="slideshow">
            <img
                className="slideshow__img"
                src={pictures[currentIndex]}
                alt={title}
            />
            <img
                className={pictures.length <= 1 ? 'slideshow__arrow--hidden' : 'slideshow__arrow slideshow__arrow--left'}
                src={arrowLeft}
                alt="previous slide"
                onClick={previousSlide}
            />
            <img
                className={pictures.length <= 1 ? 'slideshow__arrow--hidden' : 'slideshow__arrow slideshow__arrow--right'}
                src={arrowRight}
                alt="next slide"
                onClick={nextSlide}
            />
        </div>
    )
}