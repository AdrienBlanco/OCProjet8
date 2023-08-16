import arrowLeft from "../../assets/arrow-back.png";
import arrowRight from "../../assets/arrow-forward.png";
import { useState } from "react";

export default function Slideshow({ pictures, title }) {

    // Initialisation du state de currentIndex pour définir l'image à afficher dans le carrousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Décrémente currentIndex de 1 et renvoit vers l'index de la dernière image si current index = 0
    const previousSlide = () => {
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        }
    };

    // Incrémente currentIndex de 1 et renvoit vers l'index de la première image si current index est sur la dernière slide
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        }
    };

    return (
        <section className="slideshow">
            <img
                className="slideshow__img"
                src={pictures[currentIndex]}
                alt={title}
            />
            {/* Modification de la classe si une seule photo dans le carousel, afin de display none les flêches gauche et droite */}
            <img
                className={pictures.length <= 1 ? "slideshow__arrow slideshow__arrow--none" : "slideshow__arrow slideshow__arrow--left"}
                src={arrowLeft}
                alt="previous slide"
                onClick={previousSlide}
            />
            <img
                className={pictures.length <= 1 ? "slideshow__arrow slideshow__arrow--none" : "slideshow__arrow slideshow__arrow--right"}
                src={arrowRight}
                alt="next slide"
                onClick={nextSlide}
            />
        </section>
    )
}