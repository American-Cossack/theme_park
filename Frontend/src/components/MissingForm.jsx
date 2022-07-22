const MissingForm = (props) => {
    return (
      <div> 
        <h2>Missing Form</h2>
        <form onSubmit={props.getMissingEntities}>
    <input
      type="text"
      value={props.value}
      placeholder="Name"
      onChange={props.onChange}
    ></input>
    <br></br>
    <input
      type="text"
      value={props.value}
      placeholder="Age"
      onChange={props.onChange}
    ></input>
    <br></br>
    <input
      type="text"
      value={props.value}
      placeholder="Description"
      onChange={props.onChange}
    ></input>
    <br></br>
       <input
      type="text"
      value={props.value}
      placeholder="Time Missing"
      onChange={props.onChange}
    ></input>
    <br></br>
    <input
      type="text"
      value={props.value}
      placeholder="Pet or Child"
      onChange={props.onChange}
    ></input>
    <br></br>
     <button className="submit" type="submit"> Submit</button>
        </form>
      </div>
        
    )
    }
    export default MissingForm