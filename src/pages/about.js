import React from "react"
import { graphql, Link } from "gatsby"
// import { FaGulp } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <BackgroundSection
      title="about us"
      styleClass="about-background"
      img={data.img.childImageSharp.fluid}
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
