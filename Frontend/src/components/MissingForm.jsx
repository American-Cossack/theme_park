const MissingForm = (props) => {
    return (
        <form onSubmit={props.getMissingEntities}>
    <input
      type="text"
      name="search"
      value={props.value}
      placeholder="Search"
      onChange={props.onChange}
    ></input>
     <button className="submit" type="submit"> Submit</button>
        </form>
    )
    }
    export default MissingForm