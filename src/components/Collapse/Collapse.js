import arrow from "../../assets/arrow.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
    // Inititation du state active à false
    const [active, setActive] = useState(false)

    // au déclenchement de handletoggle, modifie le state de active pour qu'il devienne true s'il est false et inversement 
    const handleToggle = e => {
        setActive(!active)
    };

    // Lors de l'event onClick, on modifie la classe des éléments que l'on souhaite modifier en fonction du state true ou false de active
    return (
        <div className="collapse__container">
            <div className="collapse__title" onClick={handleToggle}>
                {title}<img className={`collapse__arrow ${active && "arrow--active"}`} src={arrow} alt="chevron" />
            </div>
            <div className={`collapse__content ${active && "content--active"}`}>{content}</div>
        </div>
    );
};