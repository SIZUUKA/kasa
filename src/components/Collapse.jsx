import { useEffect, useRef, useState } from 'react'
import './Collapse.css'

function Collapse({ titre, contenu, children }) {
  const contentRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
    } else {
      contentRef.current.style.maxHeight = '0px'
    }
  }, [isOpen])

  return (
    <div className="collapse">
      <button className="collapse-entete" onClick={toggle}>
        <span className="collapse-titre">{titre}</span>
        <img
          src="/fleche.png"
          alt=""
          className={isOpen ? 'collapse-chevron collapse-chevron--ouvert' : 'collapse-chevron'}
        />
      </button>

      <div ref={contentRef} className="collapse-corps">
        <div className="collapse-contenu">
          {contenu ? <p>{contenu}</p> : children}
        </div>
      </div>

    </div>
  )
}

export default Collapse