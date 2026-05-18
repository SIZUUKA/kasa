import { Link } from 'react-router-dom'
import './Card.css'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card-lien">
      <article className="card">
        <img src={logement.cover} alt={logement.title} />
        <h2 className="card-title">{logement.title}</h2>
      </article>
    </Link>
  )
}

export default Card
