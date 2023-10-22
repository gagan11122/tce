import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          navbar
        </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to="/contact">
                contact
                </Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to="/About">
                About
                </Link>
                </li>
              </ul>
              <Link className="btn btn-primary mx-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup">
                Sign up
              </Link>

          </div>
          </div>
          </nav>