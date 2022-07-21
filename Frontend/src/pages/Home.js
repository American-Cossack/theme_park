import { useEffect, useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import EntityCard from '../components/EntityCard'
import MissingForm from '../components/MissingForm'
import EntityDetails from './EntityDetails'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [missingEntities, setMissingEntities] = useState([])

  let navigate = useNavigate()

  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    const getMissingEntities = async () => {
      const res = await axios.get(`${BASE_URL}`)
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
      <div className="inputs">
        <MissingForm onSubmit={''} value={''} onChange={''} />
      </div>
      <div className="Entities">
        <h2>Park Denizens</h2>
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
    </div>
  )
}

export default Home
