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
     <button type="submit"></button>
        </form>
    )
    }
    export default MissingForm