import React, { useState } from "react"
import ReactMde from "react-mde"
import * as Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css"

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

export default ({ user }) => {
  const [value, setValue] = useState("**Hello world!!!**")
  const [selectedTab, setSelectedTab] = useState("write")
  const [data, setData] = useState({})

  const handleChange = evt => {
    const value = evt.target.value
    setData({
      ...data,
      [evt.target.name]: value,
    })
  }

  const switchTab = () => {
    if (selectedTab === "write") {
      setSelectedTab("preview")
    } else {
      setSelectedTab("write")
    }
  }
  return (
    <div className="container-small">
      <div className="row margin-5-t">
        <div className="col-xs-12 col-md-9">
          <div className="margin-1 is-white-bg">
            <h3 className="margin-0-b">Article Title</h3>

            <input
              className="input"
              value={data.title}
              name="title"
              onChange={handleChange}
              placeholder="My Amazing Rant"
            />
            <h3 className="margin-0-b">Article Content</h3>
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={switchTab}
              classes={{
                toolbar: "lato",
              }}
              // toolbarCommands={[["code", "bold"], ["italic"]]}
              generateMarkdownPreview={markdown =>
                Promise.resolve(
                  converter.makeHtml(
                    `${data.title ? `#${data.title}\n` : ""}` + markdown
                  )
                )
              }
            />
          </div>
        </div>
        <div className="col-xs-12 col-md-3">
          <div className="margin-1 is-white-bg pad-3">
            <p className="margin-1-t">
              When you're ready you can hit the button below to submit your
              article.
            </p>
            <button
              className="bubble-button border-radius fill-width"
              style={{ maxWidth: 450 }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
