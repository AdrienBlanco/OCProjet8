import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import accomodationData from "../../datas/accomodationData.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";
import Collapse from "../../components/Collapse/Collapse";


export default function Accomodation() {

    const [filteredData, setFilteredData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const currentAccomodation = accomodationData.filter((data) => data.id === id);
        setFilteredData(currentAccomodation)
    }, [id]);

    //Redirection vers la page erreur si l'id d'accomodation n'existe pas
    const isValidId = accomodationData.find((data) => data.id === id);

    if (!isValidId) {
        return <Navigate to="/Error" />;
    }

    return (
        <div>
            {filteredData.map(data => {

                document.title = `Kasa - ${data.title}`;

                const fullName = data.host.name;
                const [firstName, lastName] = fullName.split(" ");

                const rating = data.rating;
                const stars = [];
                for (let i = 0; i < rating; i++) {
                    stars.push(<img key={i} src={starActive} alt="full star" />);
                }
                for (let i = rating; i < 5; i++) {
                    stars.push(<img key={i} src={starInactive} alt="empty star" />);
                }

                const tags = data.tags;
                const tagList = tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))

                const equipments = data.equipments;
                const equipmentList = equipments.map(equipment => (
                    <li key={equipment}>{equipment}</li>
                ))

                return (
                    <div key={data.id} className="accomodation">
                        <Slideshow
                            title={data.title}
                            pictures={data.pictures}
                        />
                        <section className="accomodation__content">
                            <div className="accomodation__titleandtags">
                                <div className="accomodation__title">
                                    <h1>{data.title}</h1>
                                    <p>{data.location}</p>
                                </div>
                                <ul className="accomodation__tags">
                                    {tagList}
                                </ul>
                            </div>
                            <div className="accomodation__hostandrating">
                                <div className="accomodation__host">
                                    <p>{firstName}<br />{lastName}</p>
                                    <img
                                        src={data.host.picture}
                                        alt={fullName}
                                    />
                                </div>
                                <div className="accomodation__rating">
                                    {stars}
                                </div>
                            </div>
                        </section>
                        <section className="accomodation__collapse">
                            <Collapse
                                title="Description"
                                content={data.description}
                            />
                            <Collapse
                                title="Équipements"
                                content={equipmentList}
                            />
                        </section>
                    </div>
                )
            })}
        </div>
    )
}