import { Link } from 'react-router-dom'
const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <Link className="home" to='/'><span>Home</span></Link>
      </nav>
    </header>
  )
}
export default Header