import './Layout.css'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="main">
        <div className="layout">
            <Header />
            <Outlet /> {/* c'est le contenu de la page */}
        </div>
        <Footer />
    </div>
)
}