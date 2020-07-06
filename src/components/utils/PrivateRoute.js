import React, { Component } from "react"
import { navigate } from "gatsby"
import { useDocumentData } from "react-firebase-hooks/firestore"
import Layout from "../layout"
import AuthorSignUp from "../AuthorSignUp"

let firebase

if (typeof window !== "undefined") {
  firebase = require("firebase")
}

const PrivateRoute = ({
  component: Component,
  location,
  auth,
  basepath,
  ...rest
}) => {
  const [user, userLoading, userError] = useDocumentData(
    firebase.firestore().doc(`users/${auth ? auth.uid : "1"}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )
  if (!auth) {
    navigate("/home/login")
    return null
  }
  const userObj = { ...auth, ...user }
  if (userLoading) {
    return (
      <Layout>
        <div className="row container">
          <div className="col-xs-12 margin-5-b text-align-center">
            <h2>Loading...</h2>
          </div>
        </div>
      </Layout>
    )
  }
  if (!user && !userLoading && !userError) {
    return (
      <Layout loggedIn={userObj}>
        <AuthorSignUp user={userObj} />
      </Layout>
    )
  }

  return (
    <Layout loggedIn={user}>
      <Component {...rest} user={user} />
    </Layout>
  )
}
export default PrivateRoute
