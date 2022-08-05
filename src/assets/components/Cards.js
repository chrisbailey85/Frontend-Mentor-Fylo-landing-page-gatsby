import React from "react"
import Card from "./Card"
import accessIcon from "../images/icon-access-anywhere.svg"
import securityIcon from "../images/icon-security.svg"
import collaborationIcon from "../images/icon-collaboration.svg"
import storeIcon from "../images/icon-any-file.svg"
import { container } from "../css/cards.module.css"
const Cards = () => {
  return (
    <section aria-label="Services">
      <div className={container}>
        <Card
          image={accessIcon}
          cardHeading="Access your files, anywhere"
          cardParagraph="The ability to use a smartphone, tablet, or computer to access your account means your 
    files follow you everywhere"
        />
        <Card
          image={securityIcon}
          cardHeading="Security you can trust"
          cardParagraph=" 2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
        />
        <Card
          image={collaborationIcon}
          cardHeading="Real-time collaboration"
          cardParagraph="The ability to use a smartphone, tablet, or computer to access your account means your 
    files follow you everywhere"
        />
        <Card
          image={storeIcon}
          cardHeading="Store any type of file"
          cardParagraph="The ability to use a smartphone, tablet, or computer to access your account means your 
    files follow you everywhere"
        />
      </div>
    </section>
  )
}

export default Cards
