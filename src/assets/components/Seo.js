import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  return (
    <Helmet>
      <html lang="en" />
      <title>{title ? title : site.siteMetadata.title}</title>
      <meta
        name="description"
        content={description ? description : site.siteMetadata.description}
      />
    </Helmet>
  )
}
export default Seo
