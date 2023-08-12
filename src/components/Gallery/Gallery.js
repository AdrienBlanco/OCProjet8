import React from "react";
import datas from "../../datas/accomodations.json";
import Card from "../Card/Card";

export default function Gallery() {
    return (
        <div className="gallery">
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}