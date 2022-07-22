import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EntityDetails = (props) => {
  const [entityDetails, setEntityDetails] = useState(null)
  const [selectedEntity, setSelectedEntity] = useState(null)

  const BASE_URL = 'http://localhost:3001/api'
  let { entityId } = useParams()

  useEffect(() => {
    const getEntityDetails = async () => {
      let res = await axios.get(`${BASE_URL}/:missingId`)
      setSelectedEntity(res.data)
      setEntityDetails(res.data)
    }
    getEntityDetails()
  }, [])

  return (
    <div className="entity-content">
      <section className="image-container">
        <div>
          {entityDetails != null ? (
            <img src={entityDetails.background_image} />
          ) : (
            ''
          )}
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3> {entityDetails != null ? selectedEntity.description : ''}</h3>
        </div>
      </section>
    </div>
  )
}

export default EntityDetails
