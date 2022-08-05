import React from "react"
import TestimonialCard from "./TestimonialCard"
import { container } from "../css/testimonial-cards.module.css"
const TestimonialCards = () => {
  return (
    <section aria-label="Testimonials">
      <div className={container}>
        <TestimonialCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          name="Satish Patel"
          job="Founder & CEO, Huddle"
          imageName="profile-1"
        />
        <TestimonialCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          name="Bruce McKenzie"
          job="Founder & CEO, Huddle"
          imageName="profile-2"
        />
        <TestimonialCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          name="Iva Boyd"
          job="Founder & CEO, Huddle"
          imageName="profile-3"
        />
      </div>
    </section>
  )
}

export default TestimonialCards
