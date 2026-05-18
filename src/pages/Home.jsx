import { useState, useEffect } from "react"
import './Home.css'
import Card from "../components/Card"
import Banner from "../components/Banner"


function Home() {
    const [logements, setLogements] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then((data) => {
                setLogements(data)
            })

    }, [])



  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="logements">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  )
}

export default Home