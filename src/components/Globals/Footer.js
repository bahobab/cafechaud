import React from "react"

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-yellow col-md-6 text-capitalize">
            <h3>
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
