import logo from "../assets/LOGO Footer.png"
function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer