import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eveniet reiciendis suscipit necessitatibus maxime ratione, quasi
              quia architecto nobis in placeat doloremque et neque quaerat?
              Voluptatem facilis nam, blanditiis cum itaque quo velit nihil
              consequatur, unde consequuntur nisi minima quidem dolorem adipisci
              corrupti nostrum aperiam, expedita odio dolorum! Aut, saepe.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
