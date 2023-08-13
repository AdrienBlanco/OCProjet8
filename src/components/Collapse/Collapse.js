import arrow from "../../assets/arrow.png";
import { useState } from "react";

export default function Collapse({ title, content }) {
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }
    
    return (
        <div className="collapse__container">
            <div className="collapse__title" onClick={handleToggle}>
                {title}<img className={`collapse__arrow ${active && "arrow--active"}`} src={arrow} alt="chevron" />
            </div>
            <div className={`collapse__content ${active && "content--active"}`}>{content}</div>
        </div>
    )
}