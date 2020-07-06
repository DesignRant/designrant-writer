import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Landing = ({ data, location }) => {
  return (
    <Layout>
      <SEO title="Hi" />
      <div className="is-black container-small margin-10-t">
        <h1 className="margin-0">Hey there.</h1>
        <h3>This is our super cool hero landing</h3>

        <p className="margin-3-b margin-5-t">
          Here I will take the time to tell you exactly what we're up to. This
          will be very exiciting.
        </p>
        <Link to="/home">
          <button className="bubble-button">Start Writing</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Landing
