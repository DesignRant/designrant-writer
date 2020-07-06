import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Layout from "./layout"
let firebase
let uiConfig

export default ({ redirectURL }) => {
  if (typeof window !== "undefined") {
    firebase = require("firebase")
    // firebase.initializeApp(config);
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: redirectURL,
    }
  }
  return (
    <Layout>
      <div className="flex align-vertical align-horizontal pad-10-t">
        <div
          className="is-white-bg border-radius margin-3-lr"
          style={{ maxWidth: 350 }}
        >
          <div className="row pad-5-tb">
            <div className="col-xs-12 text-align-center ">
              <h3 className="margin-0">Login</h3>
            </div>
            <div className="col-xs-12  text-align-center">
              <p className="margin-5-b">
                Click the buttons below to sign-in or register:
              </p>

              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase ? firebase.auth() : null}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
