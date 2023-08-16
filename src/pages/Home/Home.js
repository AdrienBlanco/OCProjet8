import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import BannerImg from "../../assets/Image source 1.png";

export default function Home() {
  document.title = "Kasa - Accueil";
  
  return (
    <div className="home">
      <Banner
        image={BannerImg}
        alt="paysage côtier"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </div>
  );
};