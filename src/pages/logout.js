import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"

const App = () => {
  return (
    <Layout>
      <div className="row container">
        <div className="col-xs-12 margin-10-t text-align-center">
          <h2>You've been logged out successfully.</h2>
          <p>Hope to see you back here soon with an awesome rant.</p>
          <Link to="/home">
            <button className="bubble-button">Home</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default App
