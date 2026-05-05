import bannerImg from '../assets/IMG.png'

export default function Banner({ title }) {
    return (
        <div className="banner">
            <img src={bannerImg} alt="banner" />
            <h1>{title}</h1>
        </div>
    )
}