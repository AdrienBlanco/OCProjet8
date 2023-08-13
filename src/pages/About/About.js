import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutData from "../../datas/aboutData.json";

export default function About() {

    return (
        <div className="about">
            <Banner />
            <div className="about__collapse">
                {aboutData.map(data => (
                    <Collapse
                        key={data.id}
                        title={data.title}
                        content={data.content}
                    />
                ))}
            </div>
        </div>
    )
};