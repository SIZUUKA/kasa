import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

export default function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Kasa" />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}