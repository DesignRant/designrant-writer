import React, { useState } from "react"

let firebase

if (typeof window !== "undefined") {
  firebase = require("firebase")
}

export default ({ user }) => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const handleChange = evt => {
    const value = evt.target.value
    setError(undefined)
    setData({
      ...data,
      [evt.target.name]: value,
    })
  }

  const addAuthorDetails = () => {
    const { name, from, shortBio, bio } = data
    if (name && from && shortBio && bio) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(
          {
            ...data,
            uid: user.uid,
          },
          { merge: true }
        )
    } else {
      setError("⚠️ Please make sure you have filled in all required fields.")
    }
  }

  const form = [
    {
      title: "Your Name*",
      subTitle: "Your name as you would like it appear on posts you author.",
      formName: "name",
      placeholder: "John Smith",
    },
    {
      title: "Your City & Country*",
      formName: "from",
      placeholder: "Brighton, UK",
    },
    {
      title: "Short Bio*",
      subTitle: "Max 30 Characters",
      formName: "shortBio",
      placeholder: "Living & Breathing UX Design",
    },
    {
      title: "Longer Bio*",
      subTitle: "Max 200 Characters",
      formName: "bio",
      placeholder:
        "When I'm not ranting , you can find me working in a tool office building. There I design cool stuff!",
    },
    {
      title: "Twitter",
      subTitle: "Your twitter handle",
      formName: "twitter",
      placeholder: "@samlarsendisney",
    },
    {
      title: "Your Website",
      subTitle: "If you have a website you can add it here.",
      formName: "website",
      placeholder: "@samlarsendisney",
    },
  ]
  return (
    <div className="row container">
      <div className="col-xs-12 margin-5-b">
        <div className="is-white-bg border-radius margin-3-lr margin-10-t">
          <div className="row pad-5-tb pad-1-lr">
            <div className="col-xs-12 text-align-center ">
              <h2 className="margin-0">Author Signup</h2>
              <p className="margin-3-t margin-0-b">
                Please note that information you enter here will be available on
                your public author profile.<strong> Keep it clean!</strong>
              </p>
            </div>
            {error && (
              <div className="col-xs-12 ">
                <div className=" margin-3 pad-3-lr pad-2-tb is-black-bg is-white border-radius">
                  <h4 className="margin-0">{error}</h4>
                </div>
              </div>
            )}
            {form.map(({ title, subTitle, formName, placeholder }) => (
              <div className="col-xs-12">
                <h3 className="margin-1-b">{title}</h3>
                {subTitle && (
                  <p className="margin-0-tb opacity-70">{subTitle}</p>
                )}
                <input
                  className="input"
                  value={data[formName]}
                  name={formName}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </div>
            ))}
            <div className="col-xs-12 text-align-center margin-3-t ">
              <button
                onClick={addAuthorDetails}
                className="bubble-button border-radius"
                style={{ minWidth: 250 }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
