const AnimalCard = (props) => {
    return (
      <div className="animalCard" onClick={props.onClick}>
        <div className="img-wrapper">
          <img className="img" src={props.image} alt={''} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>Name: {props.name}</h3>
          <p>Diet: {props.diet}</p>
          <p>Quantity: {props.quantity}</p>
        </div>
      </div>
    )
  }
  export default AnimalCard

