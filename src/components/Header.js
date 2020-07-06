import React from "react"
import Logo from "../assets/icon-dark.svg"
import { Link, navigate } from "gatsby"

let firebase
if (typeof window !== "undefined") {
  firebase = require("firebase")
}

export default ({ loggedIn }) => {
  return (
    <div className="is-black-bg is-white">
      <div className="row pad-2-tb pad-1-lr">
        <div className="col-xs-6 ">
          <Link to="/home">
            <div className="flex align-horizontal">
              <img src={Logo} className="grow logo" />
              <h3 className="margin-0 margin-2-l">Writer</h3>
            </div>
          </Link>
        </div>

        <div className="col-xs-6 flex" style={{ justifyContent: "flex-end" }}>
          {loggedIn && (
            <button
              onClick={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(function () {
                    navigate("/logout")
                  })
                  .catch(function (error) {
                    // An error happened
                  })
              }}
            >
              <h4 className="margin-1-r margin-0-tb is-white">Logout</h4>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
