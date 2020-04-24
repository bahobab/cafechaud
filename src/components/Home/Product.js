import React from "react"
import Img from "gatsby-image"

function Product({ product }) {
  return (
    <div className="col-10 col-md-6 col-sm-8 col-lg-4 mx-auto my-3">
      <Img fluid={product.image.fluid} className="card-image-top" />
      <div className="card-body text-center">
        <h6>{product.title}</h6>
        <h6>${product.price}</h6>
        <button className="btn btn-yellow mt-3 text-capitalize">
          add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
