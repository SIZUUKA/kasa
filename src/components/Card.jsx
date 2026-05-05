function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover}  />
      <h2 className="card-title">{logement.title}</h2>
    </div>
  )
}

export default Card