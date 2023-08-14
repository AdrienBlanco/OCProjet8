export default function Banner({ image, alt, title }) {

    return (
        <div className="banner">
            <img src={image} alt={alt} />
            <h1>{title}</h1>
        </div>
    )
}
