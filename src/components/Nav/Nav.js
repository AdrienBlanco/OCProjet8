import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    return (
        <nav>
            <Link className={location.pathname === "/" ? "nav--active" : ""} to="/">Accueil</Link>
            <Link className={location.pathname === "/about" ? "nav--active" : ""} to="/about">A Propos</Link>
        </nav>
    )
}