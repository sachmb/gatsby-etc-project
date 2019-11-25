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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Enim ipsam magni cupiditate reprehenderit doloribus omnis
              temporibus tempore rerum, suscipit, nisi itaque est ex dolores
              architecto dolor amet? Possimus itaque totam distinctio soluta
              harum quae veritatis sed. Sed iste fugit ex nulla ipsam veritatis
              itaque cupiditate, omnis tempora saepe aperiam quam molestiae ducimus
              praesentium ipsum voluptates, neque doloribus maxime ea, consectetur
              unde iusto quas odit? Earum id excepturi fugit quis atque corrupti,
               ducimus placeat natus, dolore at consectetur unde vel omnis sapiente
               maxime mollitia eius? Voluptates quaerat omnis quidem maiores unde iste,
               nulla sit tempore distinctio! Totam cum architecto corrupti odit?
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
