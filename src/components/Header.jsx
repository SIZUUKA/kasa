import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const { pathname } = useLocation()
    return (
        <header className="header">
            <Link to="/">
                <img src="/LOGO.png" alt="Kasa" />
            </Link>
            <nav>
                <Link to="/" className={pathname === '/' ? 'active' : ''}>
                    Accueil
                </Link>
                <Link to="/about" className={pathname === '/about' ? 'active' : ''}>
                    A propos
                </Link>
            </nav>
        </header>
    )
}