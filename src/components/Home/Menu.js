import React, { Component } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title.js"

const getCategories = (items) => {
  const tempItems = items.map((item) => item.node.category)
  const tempCategories = Array.from(new Set(tempItems))
  const categories = ["all", ...tempCategories]
  return categories
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleCategories = (category) => {
    const tempItems = [...this.state.items]

    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      const items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return {
          coffeeItems: items,
        }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <div className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <buton
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => this.handleCategories(category)}
                    >
                      {category}
                    </buton>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} className="" />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>$ {node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>
                          {node.description.json.content[0].content[0].value}
                        </small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-capitalize text-center">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
