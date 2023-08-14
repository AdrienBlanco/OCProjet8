import accomodationData from "../../datas/accomodationData.json";
import Card from "../Card/Card";

export default function Gallery() {
    return (
        <section className="gallery">
            {accomodationData.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    )
}