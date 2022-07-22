const EntityCard = (props) => {
    return (
      <div className="entityCard" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>Name: {props.name}</h3>
          <p>Age: {props.age}</p>
          <p>Time Missing: {props.timeMissing}</p>
          <p>Description: {props.description}</p>
          <p>Human: {props.isHuman}</p>
        </div>
      </div>
    )
  }
  export default EntityCard