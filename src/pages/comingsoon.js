import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Landing = () => {
  return (
    <Layout>
      <SEO title="Hi" />
      <div className="is-white-bg" style={{ height: "100%" }}>
        <div className="is-white-bg">
          <div className="is-black container-small pad-10-tb pad-3-lr">
            <h1 className="margin-0 fade-in-fwd is-hero-text">Hey there,</h1>
            <h1 className=" fade-in-bottom">
              Enjoyed what you're reading and want to write for us? Very soon we
              will have a dedicated author writing platform.
            </h1>
          </div>
        </div>
        <div className="is-light-grey-bg pad-10-tb pad-3-lr">
          <div className="is-black container-small ">
            <h1 className="">
              Anyone can author - whether you’re a student, UX developer,
              designer, engineer or just interested in the subject. Together,
              let’s improve the UX around us.
            </h1>
          </div>
        </div>
        <div className="is-white-bg">
          <div className="is-black container-small pad-10-tb pad-3-lr">
            <h1 className="margin-0 fade-in-fwd is-hero-sub-text">
              Developer?
            </h1>
            <h1>
              If you're a developer and would rather submit a post now, you can
              do so via github by{" "}
              <a
                className="is-special-blue"
                href="https://github.com/DesignRant/designrant-app"
              >
                heading over to our repository
              </a>
              . Better yet, come and code the platform that puts its authors
              first.
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Landing
