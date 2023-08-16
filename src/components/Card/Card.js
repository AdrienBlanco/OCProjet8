import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
    return (
        // Utilisation du composant Link de react-router-dom pour faire le lien vers la page accomodation correspondante
        <Link to={`/accomodation/${id}`} className="card">
            <img src={cover} alt={title} />
            <div className="card--overlay"></div>
            <p>{title}</p>
        </Link>
    );
};