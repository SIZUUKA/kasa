import './Banner.css'

function Banner({ title }) {
  return (
    <div className="banner">
      <img src="/IMG.png" alt="bannière" />
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner