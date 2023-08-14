import LogoKasa from "../../assets/logo-kasa-primary.png";
import Nav from "../../components/Nav/Nav";

export default function Header() {
    return (
        <header>
            <img src={LogoKasa} alt="Logo Kasa" />
            <Nav />
        </header>
    )
}