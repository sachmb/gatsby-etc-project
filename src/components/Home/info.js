import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Elegance Trade Center at the heart of Pokhara has been serving with dedication and perfection since 1985. The flooring, furnishing and furniture hub has been serving the customers with products from around the globe.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
