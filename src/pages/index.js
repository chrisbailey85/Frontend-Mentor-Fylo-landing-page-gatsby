import React from "react"
import Layout from "../assets/components/Layout"
import Banner from "../assets/components/Banner"
import Cards from "../assets/components/Cards"
import Productive from "../assets/components/Productive"
import TestimonialCards from "../assets/components/TestimonialCards"
import Signup from "../assets/components/Signup"
import Seo from "../assets/components/Seo"
import "../assets/css/main.css"
export default function Home() {
  return (
    <Layout>
      <Seo />
      <Banner />
      <Cards />
      <Productive />
      <TestimonialCards />
      <Signup />
    </Layout>
  )
}
