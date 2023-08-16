import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import accomodationData from "../../datas/accomodationData.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";
import Collapse from "../../components/Collapse/Collapse";


export default function Accomodation() {

    // Initialisation du State de currentAccomodationData sous forme de tableau
    const [currentAccomodationData, setCurrentAccomodationData] = useState([]);

    // Récupération de la partie id de l'URL
    const { id } = useParams();

    /* useEffect pour filtrer l'élément d'accomodationData correspondant à la page actuellement ouverte 
    + set de CurrentAccomodationData, au changement de l'id présent dans l'URL */
    useEffect(() => {
        const filteredAccomodationData = accomodationData.filter((data) => data.id === id);
        setCurrentAccomodationData(filteredAccomodationData)
    }, [id]);

    // défini isValidId comme true si l'id de l'URL existe dans accomodationData
    const isValidId = accomodationData.find((data) => data.id === id);

    return (
        <>
            {!isValidId ? <Navigate to="/Error" /> : currentAccomodationData.map(data => {
                // Si isValidId est false, redirection vers la page Erreur grâce au composant Navigate
                // Sinon mapping des données de currentAccomodationData
                
                document.title = `Kasa - ${data.title}`;

                // Split du nom et du prénom de l'host
                const fullName = data.host.name;
                const [firstName, lastName] = fullName.split(" ");

                // Crée un tableau de 5 étoiles = Itère la création d'étoiles pleines en fonction de data.rating. Les autres étoiles créées sont vides
                const stars = Array.from({ length: 5 }, (_, index) => (
                    <img
                        key={index}
                        src={index < data.rating ? starActive : starInactive}
                        alt={index < data.rating ? "full star" : "empty star"}
                    />
                ));

                // Mapping de la liste des tags
                const tagList = data.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ));

                // Mapping de la liste des équipements
                const equipmentList = data.equipments.map(equipment => (
                    <li key={equipment}>{equipment}</li>
                ));

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
        </>
    )
}