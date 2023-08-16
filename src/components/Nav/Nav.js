import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    // Link et useLocation permettent de renvoyer vers les pages correspondantes et d'afficher la classe "nav--active" en fonction de l'emplacement actuel
    return (
        <nav>
            <Link className={location.pathname === "/" ? "nav--active" : ""} to="/">Accueil</Link>
            <Link className={location.pathname === "/about" ? "nav--active" : ""} to="/about">A Propos</Link>
        </nav>
    )
}