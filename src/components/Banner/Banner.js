import React from "react";
import BannerHome from "../../assets/Image source 1.png";
import BannerAbout from "../../assets/Image source 2.png";
import { useLocation } from "react-router-dom";

export default function Banner() {
    const location = useLocation();
    if (location.pathname === "/") {
        return (
            <div className="banner">
                <img src={BannerHome} alt="paysage côtier" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        )
    } return (
        <div className="banner">
            <img src={BannerAbout} alt="paysage montagneux" />
        </div>
    )
}
