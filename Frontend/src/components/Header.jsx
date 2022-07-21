import { Link } from 'react-router-dom'
const Header = (props) => {
  return (
    <header>
      <nav>
        <Link to='/'>home</Link>
      </nav>
    </header>
  )
}
export default Header