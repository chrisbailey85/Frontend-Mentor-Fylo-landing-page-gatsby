import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import { nav, container } from "../css/navbar.module.css"
const Navbar = () => {
  return (
    <header>
      <div className={container}>
        <Link to="/">
          <img src={Logo} alt="" />
          <span className="sr-only">Home</span>
        </Link>
        <nav className={nav} aria-label="primary navigation">
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
