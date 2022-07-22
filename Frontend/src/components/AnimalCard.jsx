const AnimalCard = (props) => {
    return (
      <div className="animalCard" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt={''} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.name}</h3>
          <p>{props.diet}</p>
          <p>{props.quantity}</p>
        </div>
      </div>
    )
  }
  export default AnimalCard

