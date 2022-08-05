import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { banner, container, btn } from "../css/banner.module.css"
const Banner = () => {
  return (
    <section className={banner}>
      <div className={container}>
        <StaticImage
          src="../images/illustration-intro.png"
          alt=""
          placeholder="blurred"
        />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button type="button" className={btn}>
          Get started
        </button>
      </div>
    </section>
  )
}

export default Banner
