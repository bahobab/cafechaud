import React from "react"
import { graphql, Link } from "gatsby"
// import { FaGulp } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <BackgroundSection
      title="cafe chaud chez Toto"
      img={data.img.childImageSharp.fluid}
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFluid
            }
          }
          description {
            json
          }
        }
      }
    }
  }
`

export default IndexPage
