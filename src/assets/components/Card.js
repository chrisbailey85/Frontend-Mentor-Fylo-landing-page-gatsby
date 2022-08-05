import React from "react"
import { card } from "../css/card.module.css"
const Card = ({ image, cardHeading, cardParagraph }) => {
  return (
    <div className={card}>
      <img src={image} alt="" />
      <h2>{cardHeading}</h2>
      <p>{cardParagraph}</p>
    </div>
  )
}

export default Card
