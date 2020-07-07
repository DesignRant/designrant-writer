import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"

export default ({ user }) => {
  console.log(user)
  return (
    <div className="container-small">
      <SEO title="Home" />
      <div className="row pad-5-t">
        <div className="col-xs-12 col-md-4">
          <div className="margin-1 is-white-bg pad-3">
            <p className="margin-1-tb">AUTHOR SUMMARY</p>
            <h2 className="margin-0-b">{user.name}</h2>
            <p className="margin-1-t">{user.from}</p>
            <p>{user.bio}</p>
            <button className="bubble-button border-radius fill-width">
              Edit Info
            </button>
          </div>
        </div>
        <div className="col-xs-12 col-md-8">
          {user.articles && user.articles.length > 0 ? (
            <div>Article List</div>
          ) : (
            <div className="margin-1 is-white-bg pad-3">
              <h2>Write your first post. </h2>
              <p>
                It looks like you havent submitted an article yet. Got something
                rant-worthy? Why not submit your first post now?
              </p>
              <Link to="/home/write">
                <button
                  className="bubble-button border-radius fill-width"
                  style={{ maxWidth: 450 }}
                >
                  Write Post
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
