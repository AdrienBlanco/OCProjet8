export default function Banner({ image, alt, title }) {

    return (
        <section className="banner">
            <img src={image} alt={alt} />
            <h1>{title}</h1>
        </section>
    )
}
