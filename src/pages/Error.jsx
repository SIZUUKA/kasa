import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <main className="page-erreur">
      <p className="page-erreur__code">404</p>
      <p className="page-erreur__titre">
        Oups ! La page que vous demandez n&apos;existe pas.
      </p>
      <Link className="page-erreur__lien" to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  )
}

export default Error