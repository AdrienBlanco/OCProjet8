import React from "react";
import ImageBanner from "../../assets/Image source 1.png";
import ImageAbout from "../../assets/Image source 2.png";
import { useLocation } from "react-router-dom";

export default function Banner() {
    const location = useLocation();
    if (location.pathname === "/") {
        return (
            <div className="banner">
                <img src={ImageBanner} alt="paysage côtier" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        )
    } else if (location.pathname === "/about") {
        return (
            <div className="banner">
                <img src={ImageAbout} alt="paysage montagneux" />
            </div>
        )
    }
}