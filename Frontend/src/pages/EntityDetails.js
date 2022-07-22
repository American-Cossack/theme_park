import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const EntityDetails = () => {
  const [entityDetails, setEntityDetails] = useState("")
  const [selectedEntity, setSelectedEntity] = useState("")

  const BASE_URL = "http://localhost:3001/api"

  const { entityId } = useParams()

  useEffect(() => {
    const getEntityDetails = async () => {
      await axios.get(`${BASE_URL}/${entityId}`).then((res) => {
        setEntityDetails(res.data.selectedEntity)
        // setSelectedEntity(res.data.selectedEntity)
        console.log(res.data.selectedEntity)
      })
    }
    getEntityDetails()
  }, [])

  return (
    <div className="details-card">
      <div className="img-wrapper">
        <img
          className="img-detail"
          src={entityDetails.name != null ? entityDetails.image : ""}
          alt={"entityDetails.name"}
        />
      </div>
      <div className="info-wrapper flex-col">
        <h3> {entityDetails.name != null ? entityDetails.name : ""}</h3>
        <p>Age: {entityDetails.name != null ? entityDetails.age : ""}</p>
        <p>
          Time Missing:
          {entityDetails.name != null ? entityDetails.timeMissing : ""}
        </p>
        <p>{entityDetails.name != null ? entityDetails.description : ""}</p>
      </div>
    </div>
  )
}

export default EntityDetails
