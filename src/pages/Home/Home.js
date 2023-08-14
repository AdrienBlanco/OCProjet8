import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import BannerImg from "../../assets/Image source 1.png";


export default function Home() {
  document.title = "Kasa - Accueil";

  const alt = "paysage côtier";
  const title = "Chez vous, partout et ailleurs";

  return (
    <div className="home">
      <Banner
        image={BannerImg}
        alt={alt}
        title={title}
      />
      <Gallery />
    </div>
  );
}