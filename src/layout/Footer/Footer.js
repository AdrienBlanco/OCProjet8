import LogoFooter from "../../assets/logo-kasa-secondary.png";

export default function Footer() {
    return (
        <footer>
            <img className="footer__logo" src={LogoFooter} alt="Logo Kasa" />
            <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}