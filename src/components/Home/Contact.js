import React from "react"

import Title from "../Globals/Title"

function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <Title title="our contact" />
        <div className="row">
          <div className="col10 col-sm-8 col-md-6 mx-auto">
            <form action="https://formspree.io/xknvdkgj" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Toto Lago"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="lago.toto@lolo.io"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  className="form-control"
                  placeholder="What's on your mind?..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
