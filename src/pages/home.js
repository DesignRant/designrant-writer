import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/utils/PrivateRoute"
import { useAuth } from "../components/utils/useAuth"
import Home from "../components/routes/Home"
import Write from "../components/routes/Write"
import Login from "../components/Login"

const App = () => {
  const { initializing, user } = useAuth()
  console.log("HERE")
  if (initializing) {
    return (
      <Layout>
        <div className="row container">
          <div className="col-xs-12 margin-5-b text-align-center">
            <h2>Loading...</h2>
          </div>
        </div>
      </Layout>
    )
  } else {
    const basePath = "/home"
    return (
      <Router basepath={basePath}>
        <Login path="/login" redirectURL={basePath} />
        <PrivateRoute
          path="/write"
          component={Write}
          auth={user}
          basepath={basePath}
        />
        <PrivateRoute
          path="/"
          component={Home}
          auth={user}
          basepath={basePath}
        />
      </Router>
    )
  }
}
export default App
