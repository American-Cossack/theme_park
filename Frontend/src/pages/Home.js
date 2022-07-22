import { useEffect, useState } from "react"
import AnimalCard from "../components/AnimalCard"
import EntityCard from "../components/EntityCard"
import MissingForm from "../components/MissingForm"
import EntityDetails from "./EntityDetails"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Home = () => {
  const [missingEntities, setMissingEntities] = useState([])

  let navigate = useNavigate()

  const BASE_URL = "http://localhost:3001/api"

  useEffect(() => {
    const getMissingEntities = async () => {
      const res = await axios.get(`${BASE_URL}/animals`)
      console.log(res)
      setMissingEntities(res.data)
    }
    getMissingEntities()
  }, [])

  const handleInput = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1 className="title">Five Flags</h1>
      <div className="missing-form">
        <MissingForm onSubmit={""} value={""} onChange={""} />
      </div>
      <div className="entities">
        <h2 className="missing-title">Missing Entities</h2>
        <section className="container-grid">
          {missingEntities.map((result) => (
            <div>
              <EntityCard
                onClick={() => {
                  navigate(`/${result.id}`)
                }}
                image={result.image_background}
                name={result.name}
                age={result.rating}
                description={result.description}
                timeMissing={result.timeMissing}
                isHuman={result.isHuman}
              />
            </div>
          ))}
        </section>
      </div>
      <div className="animals">
        <h2 className="animal-title">Animals</h2>
        <section className="container-grid">
          {missingEntities.map((result) => (
            <div>
              <AnimalCard
                onClick={() => {
                  navigate(`/${result.id}`)
                }}
                image={result.image_background}
                name={result.name}
                age={result.rating}
                description={result.description}
                timeMissing={result.timeMissing}
                isHuman={result.isHuman}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
