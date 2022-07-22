import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EntityDetails = (props) => {
  const [entityDetails, setEntityDetails] = useState(null)
  const [selectedEntity, setSelectedEntity] = useState(null)

  const BASE_URL = 'http://localhost:3001/api'

  let { entityId } = useParams() //this keeps coming in as undefined...
  console.log(entityId)
  useEffect(() => {
    const getEntityDetails = async () => {
      let res = await axios.get(`${BASE_URL}/${entityId}`)
      setEntityDetails(res.data)
      console.log(entityId)
    }
    getEntityDetails()
  }, [])

  return (
    <div className="entity-content">
      <section className="image-container">
        <div></div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3></h3>
        </div>
      </section>
    </div>
  )
}

export default EntityDetails
