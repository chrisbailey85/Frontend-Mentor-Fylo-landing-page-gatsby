import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { card, user } from "../css/testimonial-card.module.css"
const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

const TestimonialCard = ({ text, name, job, imageName }) => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <div className={card}>
      <p>{text}</p>
      <div className={user}>
        {nodes.map((img, idx) => {
          if (imageName === img.name) {
            const image = getImage(img)
            return <GatsbyImage key={idx} image={image} alt="" />
          }
          return null
        })}
        <p>
          {name} <span>{job}</span>
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
