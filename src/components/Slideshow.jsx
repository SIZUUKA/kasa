import { useState } from 'react'
import './Slideshow.css'

function Slideshow({ images, titreLogement }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function next() {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function prev() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="slideshow">

      {images.length > 1 && (
        <button
          type="button"
          className="slideshow__fleche slideshow__fleche--gauche"
          onClick={prev}
          aria-label="Photo précédente"
        >
          <img src="/arrow_left.svg" alt="" width={47} height={80} />
        </button>
      )}

      <img
        className="slideshow__image"
        src={images[currentIndex]}
        alt={`${titreLogement} - photo ${currentIndex + 1}`}
      />

      {images.length > 1 && (
        <button
          type="button"
          className="slideshow__fleche slideshow__fleche--droite"
          onClick={next}
          aria-label="Photo suivante"
        >
          <img src="/arrow_right.svg" alt="" width={47} height={80} />
        </button>
      )}

      {images.length > 1 && (
        <p className="slideshow__compteur">
          {currentIndex + 1}/{images.length}
        </p>
      )}

    </div>
  )
}

export default Slideshow