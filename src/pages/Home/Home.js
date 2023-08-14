import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";


export default function Home() {
  document.title = "Kasa - Accueil";
  return (
    <div className="home">
      <Banner />
      <Gallery />
    </div>
  );
}