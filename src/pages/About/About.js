import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutData from "../../datas/aboutData.json";
import BannerImg from "../../assets/Image source 2.png";

export default function About() {
    document.title = "Kasa - A Propos";

    return (
        <div className="about">
            <Banner
                image={BannerImg}
                alt="paysage montagneux"
            />
            {/* Mapping de aboutData pour alimenter les props du composant collapse de la page */}
            <section className="about__collapse">
                {aboutData.map(data => (
                    <Collapse
                        key={data.id}
                        title={data.title}
                        content={data.content}
                    />
                ))}
            </section>
        </div>
    );
};