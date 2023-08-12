import LogoKasa from "../../assets/logo-kasa-primary.png";
import Nav from "../../components/Nav/Nav";

export default function Header() {
    return (
        <header>
            <img className="header__logo" src={LogoKasa} alt="Logo Kasa" />
            <Nav />
        </header>
    )
}