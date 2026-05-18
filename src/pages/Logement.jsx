import { useEffect, useState } from 'react'
import './Logement.css'
import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Etoiles({ note }) {
  return (
    <p className="logement-etoiles">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= note ? 'logement-etoile logement-etoile--pleine' : 'logement-etoile'}
        />
      ))}
    </p>
  )
}

function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    let ignore = false
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((reponse) => reponse.json())
      .then((donnees) => {
        if (!ignore) {
          setLogement(donnees)
        }
      })
    return () => {
      ignore = true
    }
  }, [id])

  if (!logement || !logement.pictures) {
    return (
      <main className="page-logement">
        <p className="page-logement__chargement">Chargement…</p>
      </main>
    )
  }

  return (
    <main className="page-logement">
      <Slideshow
        key={id}
        images={logement.pictures}
        titreLogement={logement.title}
      />

      <div className="logement-entete">
        <div className="logement-entete__principal">
          <h1 className="logement-titre">{logement.title}</h1>
          <p className="logement-lieu">{logement.location}</p>
          <ul className="logement-tags">
            {logement.tags.map((tag) => (
              <li key={tag} className="logement-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="logement-entete__hote">
          <div className="logement-hote-cartouche">
            <img
                className="logement-hote-photo"
                src={logement.host.picture}
                alt=""
            />
            <p className="logement-hote-nom">{logement.host.name}</p>
          </div>
          <Etoiles note={logement.rating} />
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse titre="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse titre="Équipements">
          <ul className="logement-liste-equipements">
            {logement.equipments.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  )
}

export default Logement
