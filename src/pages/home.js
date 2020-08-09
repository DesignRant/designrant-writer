import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/utils/PrivateRoute"
import { useAuth } from "../components/utils/useAuth"
import Home from "../components/routes/Home"
import Write from "../components/routes/Write"
import Stats from "../components/routes/Stats"
import Login from "../components/Login"
import Loading from "../components/Loading"

const App = () => {
  const { initializing, user } = useAuth()
  if (initializing) {
    return <Loading LoadingText="Loading Account" />
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
          path="/stats"
          component={Stats}
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
