import React from "react"
import { Link } from "gatsby"
import { Emojione } from "react-emoji-render"
import SEO from "../seo"

export default ({ user }) => {
  console.log(user)
  return (
    <div className="container-small">
      <SEO title="Home" />
      <div className="row pad-5-t">
        <div className="col-xs-12 col-md-4">
          <div className="margin-1 is-white-bg pad-3">
            <p className="margin-1-tb">
              <i class="las la-id-badge"></i> AUTHOR
            </p>
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
            <>
              <div className="margin-1 is-white-bg pad-3">
                {" "}
                <p className="margin-1-tb">
                  <i class="las la-feather"></i> POSTS
                </p>
              </div>
              <div className="margin-1 margin-3-t is-white-bg pad-3">
                {" "}
                <p className="margin-1-tb">
                  <i class="las la-plus-square"></i> NEW POST
                </p>
                <p className="">
                  Got something rant-worthy? Why not submit a new post now?
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
            </>
          ) : (
            <div className="margin-1 is-white-bg pad-3">
              <p className="margin-1-tb">
                <i class="las la-meteor"></i>NEWBIE
              </p>
              <h2 className="margin-0-b">Write your first post. </h2>
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
