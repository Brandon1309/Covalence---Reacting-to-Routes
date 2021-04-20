import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      {/* <div className="container-fluid"> */}
      <a className="navbar-brand" href="#">Studio Ghibli</a>

      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a href="#" className="nav-link">
            <Link to={`/`}>Go Home</Link>
          </a>
          <a href="#" className="nav-link">
            <Link to={`/films`}>View Films</Link>
          </a>
          <a href="#" className="nav-link">
            <Link to={`/people`}>View People</Link>
          </a>
          <a href="#" className="nav-link">
            <Link to={`/species`}>View Species</Link>
          </a>
        </div>

      </div>
      {/* </div> */}
    </nav >

  )
}
export default NavBar