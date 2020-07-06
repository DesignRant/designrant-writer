import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import Header from "./Header"

const Layout = ({ children, loggedIn }) => {
  return (
    <div className="is-grey">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css"
        />
      </Helmet>
      <CookieConsent
        location="bottom"
        buttonText="Got it"
        cookieName="DesignRantConsentCookie"
        style={{ background: "#000" }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          background: "#ffffff",
          fontFamily: "lato",
          borderRadius: 3,
          padding: 10,
        }}
      >
        <h4 className="margin-0">
          This website uses cookies so we can enhance the user experience and
          avoid ending up on a site like this one.
        </h4>
      </CookieConsent>
      <Header loggedIn={loggedIn} />
      <body className="is-light-grey-bg">
        <div className="row">
          <div className="col-xs-12 is-black ">
            <div className="margin-1-lr">{children}</div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Layout
