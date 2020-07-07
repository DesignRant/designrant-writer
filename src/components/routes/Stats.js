import React from "react"
import { Link } from "gatsby"

import Coffee from "../../assets/coffee.jpg"
import Twitter from "../../assets/twitter.svg"
import Website from "../../assets/website.svg"

export default ({ user }) => {
  const rants = 12
  const words = 10439
  const rantViews = 178
  const authorViews = 56
  const rantVotes = 22
  const rantWorthy = 82 //Ensure this is rounded
  const twitterI = 123
  const websiteI = 13
  const kofiI = 7
  const buymeacoffeeI = 2
  const userPosts = [
    {
      id: "afsdfvdfv",
      title: "My very first post",
      hero:
        "https://designrant.app/static/icon-4b2d12b45903abdca2ee7c635f626597.svg", // will just be a link to posts hero
      rating: 75,
      link: "https://designrant.app", // Will be link to post
    },
    {
      id: "afsdfvdfsdsdvv",
      title: "Disney+",
      hero:
        "https://designrant.app/static/icon-4b2d12b45903abdca2ee7c635f626597.svg", // will just be a link to posts hero
      rating: 50,
      link: "https://designrant.app",
    },
    {
      id: "afsdfvdfvasdaskc",
      title: `What's wrong with WhatsApp's "Delete for Everyone" feature`,
      hero:
        "https://designrant.app/static/icon-4b2d12b45903abdca2ee7c635f626597.svg", // will just be a link to posts hero
      rating: 98,
      link: "https://designrant.app",
    },
    {
      id: "afs231313dfvdfv",
      title: "Cookies Everywhere",
      hero:
        "https://designrant.app/static/icon-4b2d12b45903abdca2ee7c635f626597.svg", // will just be a link to posts hero
      rating: 13,
      link: "https://designrant.app",
    },
  ]
  user = {
    ...user,
    twitter: "SamLarsenDisney",
    website: "https://sld.codes/",
    kofi: "sldcodes",
    buymeacoffee: "yannis",
  }
  console.log(user)

  let orderedPosts = userPosts.sort((a, b) =>
    a.rating > b.rating ? -1 : b.rating > a.rating ? 1 : 0
  )
  console.log(orderedPosts)

  const addCommas = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="container-small">
      <div className="row margin-5-t">
        <div className="col-xs-12 col-md-4">
          <div className="margin-1 is-white-bg pad-3">
            <p className="margin-1-tb">AUTHOR STATS</p>
            {/* <img src={user.avatar} className="avatar-lg" alt="avatar" /> */}
            <img
              src={
                "https://avatars2.githubusercontent.com/u/16169107?s=60&u=72795df92382ff6910cbde9511a93aff11fb791c&v=4"
              }
              className="avatar-lg"
              alt="avatar"
            />
            <h2 className="stats-user-name">{user.name}</h2>
            <p className="margin-1-t">{user.from}</p>
            <p>Here's some juicy stats for you. See how your rants rank.</p>
            <Link to="/home">
              <button className=" margin-1-t bubble-button border-radius fill-width">
                Back Home
              </button>
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-md-8">
          {/* {user.articles && user.articles.length > 0 ? ( */}
          {1 > 0 ? (
            <div>
              <div className="margin-1 is-white-bg pad-3">
                <h1>The Numbers</h1>
                <h3>
                  You have written
                  {rants > 1 ? (
                    <>
                      {" a design rant "}
                      <span className="large-number">
                        {addCommas(rants)}
                      </span>{" "}
                      times
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="large-number">1</span>
                      {" design rant"}
                    </>
                  )}{" "}
                  and have contributed a total of{" "}
                  <span className="large-number">{addCommas(words)}</span>{" "}
                  words.
                </h3>
                <h3>
                  Your rants have been viewed{" "}
                  {rantViews !== 1 ? (
                    <>
                      {" a total of "}
                      <span className="large-number">
                        {addCommas(rantViews)}
                      </span>{" "}
                      times
                    </>
                  ) : (
                    <span className="large-number">once</span>
                  )}{" "}
                  and your author page has been viewed{" "}
                  {authorViews !== 1 ? (
                    <>
                      {"a total of "}
                      <span className="large-number">
                        {addCommas(authorViews)}
                      </span>{" "}
                      times.
                    </>
                  ) : (
                    <span className="large-number">once.</span>
                  )}
                </h3>
                <h3>
                  {rantVotes > 0 ? (
                    <>
                      {"Your rants have been voted on "}
                      <span className="large-number">
                        {addCommas(rantVotes)}
                      </span>
                      {rantVotes > 1 ? " times. " : " time. "}
                      {"Your average rant-worthy-ness is "}
                      <span className="large-number">{rantWorthy}</span>%.
                    </>
                  ) : (
                    <>{"Your rants are yet to be voted on."}</>
                  )}
                </h3>
              </div>
              <div className="margin-1 is-white-bg pad-3">
                <h1>It's All About You</h1>
                <h3>
                  How much attention have you caught? Let's see how your
                  personal links have been interacted with.
                </h3>
                <div className="interactions">
                  <div className="interactions-row">
                    <div className="interactions-column">
                      <h3>Link</h3>
                    </div>
                    <div className="interactions-column">
                      <h3>Interactions</h3>
                    </div>
                  </div>
                  {user.website && (
                    <div className="interactions-row">
                      <div className="interactions-column">
                        <a
                          href={user.website}
                          target="_blank"
                          rel="noreferrer"
                          className="interactions-link"
                        >
                          <img
                            src={Website}
                            className="social grow-lg"
                            alt="website"
                          />
                          <h3>{user.website}</h3>
                        </a>
                      </div>
                      <div className="interactions-column">
                        <h3 className="large-number">{websiteI}</h3>
                      </div>
                    </div>
                  )}
                  {user.twitter && (
                    <div className="interactions-row">
                      <div className="interactions-column">
                        <a
                          href={`https://twitter.com/${user.twitter}/`}
                          target="_blank"
                          rel="noreferrer"
                          className="interactions-link"
                        >
                          <img
                            src={Twitter}
                            className="social grow-lg"
                            alt="twitter"
                          />
                          <h3>{user.twitter}</h3>
                        </a>
                      </div>
                      <div className="interactions-column">
                        <h3 className="large-number">{twitterI}</h3>
                      </div>
                    </div>
                  )}
                  {(user.kofi || user.buymeacoffee) && (
                    <div className="interactions-row">
                      <div className="interactions-column">
                        <a
                          href={
                            user.kofi
                              ? `https://ko-fi.com/${user.kofi}/`
                              : `https://www.buymeacoffee.com/${user.buymeacoffee}`
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="interactions-link"
                        >
                          <img
                            src={Coffee}
                            className="social grow-lg"
                            alt="coffee"
                          />
                          <h3>
                            {user.kofi
                              ? `https://ko-fi.com/${user.kofi}/`
                              : `https://www.buymeacoffee.com/${user.buymeacoffee}`}
                          </h3>
                        </a>
                      </div>
                      <div className="interactions-column">
                        <h3 className="large-number">
                          {user.kofi ? kofiI : buymeacoffeeI}{" "}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="margin-1 is-white-bg pad-3">
                <h1>Your Top Rants</h1>
                <div>
                  {orderedPosts.length > 0 &&
                    orderedPosts.map((post, index) => {
                      if (index > 4) return
                      else
                        return (
                          <a href={post.link} target="_blank" rel="noreferrer">
                            <div
                              key={`post-${post.id}`}
                              className="top-rants-row"
                            >
                              <img
                                src={post.hero}
                                className="social"
                                alt="hero"
                              />
                              <h3 className="top-rants-title">{post.title}</h3>
                              <h3 className="top-rants-rating">
                                {post.rating}% Rating
                              </h3>
                            </div>
                          </a>
                        )
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div className="margin-1 is-white-bg pad-3">
              <h2>No stats yet. </h2>
              <p>
                It looks like you havent submitted an article yet so we can't
                track any stats for you. Got something rant-worthy? Why not
                submit your first post now?
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
