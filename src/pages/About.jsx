import './About.css'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About() {
  return (
    <main className="page-a-propos">
      <Banner altImage="Montagnes" />
      <section className="page-a-propos__bloc" aria-label="Valeurs de Kasa">
        <Collapse
          titre="Fiabilité"
          contenu="Les annonces présentes sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont vérifiées régulièrement par nos équipes."
        />
        <Collapse
          titre="Respect"
          contenu="La bienveillance fait partie des fondements de Kasa. Chaque hôte ou voyageur peut laisser une note et un commentaire à l'autre. Ainsi, nous nous assurons que chacun soit respectueux envers les autres."
        />
        <Collapse
          titre="Service"
          contenu="La qualité du service est au cœur de notre engagement. Nous restons à votre disposition pour toute question sur votre logement ou votre séjour."
        />
        <Collapse
          titre="Sécurité"
          contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
        />
      </section>
    </main>
  )
}

export default About