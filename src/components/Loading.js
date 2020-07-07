import React from "react"
import Loader from "./Loader"
import Layout from "./layout"
export default ({ LoadingText = "Loading..." }) => (
  <Layout>
    <div className="row container">
      <div className="col-xs-12 pad-10-tb text-align-center">
        <Loader />
        <h3 className="opacity-50">{LoadingText}</h3>
      </div>
    </div>
  </Layout>
)
