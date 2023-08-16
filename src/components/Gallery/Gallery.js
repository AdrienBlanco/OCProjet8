import accomodationData from "../../datas/accomodationData.json";
import Card from "../Card/Card";

export default function Gallery() {
    return (
        // Mapping de accomodationData pour alimenter les props des composants Card de la galerie
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
    );
};