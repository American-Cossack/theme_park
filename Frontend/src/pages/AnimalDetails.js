import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const AnimalDetails = () => {
  const [animalDetails, setAnimalDetails] = useState("")
  const [selectedAnimal, setSelectedAnimal] = useState("")

  const BASE_URL = "http://localhost:3001/api"

  const { animalId } = useParams()

  useEffect(() => {
    const getAnimalDetails = async () => {
      await axios.get(`${BASE_URL}/${animalId}`).then((res) => {
        setAnimalDetails(res.data.selectedAnimal)
        // setSelectedEntity(res.data.selectedEntity)
        console.log(res.data.selectedAnimal)
      })
    }
    getAnimalDetails()
  }, [])

  return (
    <div className="details-card">
      <div className="img-wrapper">
        <img
          className="img-detail"
          src={animalDetails.name != null ? animalDetails.image : ""}
          alt={"animalDetails.name"}
        />
      </div>
      <div className="info-wrapper flex-col">
        <h3> {animalDetails.name != null ? animalDetails.name : ""}</h3>
        <p>Diet: {animalDetails.diet != null ? animalDetails.diet : ""}</p>
        <p>
          Quantity:
          {animalDetails.quantity != null ? animalDetails.quantity : ""}
        </p>
      </div>
    </div>
  )
}

export default AnimalDetails
