const EntityCard = (props) => {
    return (
      <div className="entityCard" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt={''} />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{props.name}</h3>
          <p>{props.age}</p>
          <p>{props.timeMissing}</p>
          <p>{props.description}</p>
          <p>{props.isHuman}</p>
        </div>
      </div>
    )
  }
  export default EntityCard