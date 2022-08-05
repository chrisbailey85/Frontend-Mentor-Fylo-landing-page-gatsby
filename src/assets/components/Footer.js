import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import logo from "../images/logo.svg"
import locationIcon from "../images/icon-location.svg"
import phoneIcon from "../images/icon-phone.svg"
import emailIcon from "../images/icon-email.svg"
import {
  container,
  footer__logo,
  location,
  email__address,
  phone,
  footer__nav,
  social__links,
  attribution,
} from "../css/footer.module.css"
const Footer = () => {
  return (
    <footer>
      <div className={container}>
        <div className={footer__logo}>
          <Link to="/">
            <img src={logo} alt="" />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div className={location}>
          <img src={locationIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <div className={phone}>
            <img src={phoneIcon} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className={email__address}>
            <img src={emailIcon} alt="" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <nav className={footer__nav} aria-label="secondary navigation">
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </nav>
        <div className={social__links}>
          <ul>
            <li>
              <a href="#">
                <FaFacebookF />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
                <span className="sr-only">Instergram</span>
              </a>
            </li>
          </ul>
        </div>
        <p className={attribution}>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://twitter.com/bailey_coding" rel="noreferrer">
            Chris Bailey
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
