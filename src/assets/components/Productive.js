import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  productive,
  container,
  productive__text,
} from "../css/productive.module.css"
import arrowIcon from "../images/icon-arrow.svg"
const Productive = () => {
  return (
    <section aria-labelledby="productive__header" className={productive}>
      <div className={container}>
        <StaticImage
          src="../images/illustration-stay-productive.png"
          alt=""
          placeholder="blurred"
        />
        <div className={productive__text}>
          <h2 id="productive__header">Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link to="/">
            See how Fylo works <img src={arrowIcon} alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Productive
