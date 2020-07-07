import React, { useState } from "react"
import ReactMde from "react-mde"
import { format } from "date-fns"
import * as Showdown from "showdown"
import ImageUploader from "react-images-upload"
import removeMd from "remove-markdown"
import "react-mde/lib/styles/scss/react-mde-editor.scss"
import "react-mde/lib/styles/scss/react-mde-toolbar.scss"
import "react-mde/lib/styles/scss/react-mde.scss"
import SEO from "../seo"

function countWords(string) {
  let s = string
  s = s.replace(/(^\s*)|(\s*$)/gi, "")
  s = s.replace(/[ ]{2,}/gi, " ")
  s = s.replace(/\n /, "\n")
  return s.split(" ").length
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

export default ({ user }) => {
  const [value, setValue] = useState(
    "### Introduction\nThis is my introduction to my awesome article"
  )
  const [selectedTab, setSelectedTab] = useState("write")
  const [picture, setPicture] = useState()
  const [data, setData] = useState({})

  const wordCount = countWords(removeMd(value))
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

  const onDrop = (picture, pictureDataURLs) => {
    setPicture(pictureDataURLs[0])
  }
  return (
    <div className="container-small">
      <SEO title="Write" />
      <div className="row pad-5-t">
        <div className="col-xs-12 col-md-9">
          <div
            className={` is-white-bg margin-5-b ${
              selectedTab === "write" ? "pad-1-t pad-2-lr" : " "
            }`}
          >
            {selectedTab === "preview" ? (
              <>
                {picture ? (
                  <img
                    src={picture}
                    className="shadow"
                    style={{
                      width: "100%",
                      maxHeight: 300,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="shadow fill-width is-black-bg is-white opacity-30 flex align-horizontal align-vertical"
                    style={{ height: 300 }}
                  >
                    <h1 className="margin-1-b">No cover image to display.</h1>
                    <p className="margin-1-t">
                      To add one, go back to the edit panel and upload either a
                      png or jpg.
                    </p>
                  </div>
                )}
                <div className=" pad-3">
                  {data.title ? (
                    <h1
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      {data.title}
                    </h1>
                  ) : (
                    <h1
                      className="opacity-40"
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      Your Post's Title
                    </h1>
                  )}
                  <div className="flex align-horizontal margin-2-t">
                    <p className="is-black margin-0 margin-1-r">
                      {format(new Date(), "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <div className="flex align-horizontal margin-2-t">
                    {data.tags ? (
                      data.tags
                        .split(",")
                        .map((item, index) => (
                          <p
                            className={`tag-primary ${
                              index !== 0 ? "margin-1-l" : ""
                            }`}
                          >
                            {item.trim()}
                          </p>
                        ))
                    ) : (
                      <p className="opacity-50 margin-0-b">
                        Your tags will appear here.
                      </p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="margin-0-b">
                  <i class="las la-heading"></i> Title
                </p>
                <input
                  className="input"
                  value={data.title}
                  name="title"
                  onChange={handleChange}
                  placeholder="My Amazing Rant"
                />

                <div className="row pad-0">
                  <div className="col-xs-12 col-md-6 margin-3-b pad-0">
                    <p>
                      <i class="las la-image"></i> Cover Image
                    </p>

                    <p>
                      This is the image that will be used at the top of your
                      article and in the SEO.
                    </p>
                    {picture && (
                      <button
                        className="bubble-button border-radius"
                        onClick={() => setPicture(undefined)}
                      >
                        Choose New Image
                      </button>
                    )}
                  </div>
                  <div className="col-xs-12 col-md-6 pad-0">
                    {!picture ? (
                      <div className="is-light-grey-bg border-radius">
                        <ImageUploader
                          buttonClassName="bubble-button"
                          className=""
                          withIcon={true}
                          withPreview={true}
                          buttonText="Choose images"
                          onChange={onDrop}
                          imgExtension={[".jpg", ".png"]}
                          maxFileSize={2621440}
                          singleImage={true}
                          label="Max file size: 2.5mb, accepted: jpg|png"
                        />
                      </div>
                    ) : (
                      <div style={{ width: "100%" }} className="shadow">
                        <img
                          src={picture}
                          className="block"
                          style={{
                            objectPosition: "50% 50%",
                            objectFit: "cover",
                            width: "100%",
                            height: 200,
                          }}
                        ></img>
                      </div>
                    )}
                  </div>
                </div>
                <p className="margin-2-t margin-1-b">
                  <i class="las la-tags"></i> Tags
                </p>
                <input
                  className="input"
                  value={data.tags}
                  name="tags"
                  onChange={handleChange}
                  placeholder="UX, Accessibility, Design"
                />
                <div
                  className="flex margin-1-t margin-0-b align-horizontal"
                  style={{ justifyContent: "space-between" }}
                >
                  <p className="margin-0">
                    <i class="las la-quote-left"></i> Body
                  </p>
                  <p
                    className={` marign-0 ${
                      wordCount > 900 ? "is-orange" : "opacity-30"
                    } ${wordCount > 1000 ? "is-red" : ""}`}
                  >
                    {" "}
                    {wordCount}
                    /1000 words.
                  </p>
                </div>
              </>
            )}
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={switchTab}
              classes={{
                reactMde: ` ${
                  selectedTab === "preview"
                    ? "react-mde-no-border pad-3-lr"
                    : ""
                }`,
                toolbar: `lato ${
                  selectedTab === "preview" ? "mde-header-hide" : ""
                }`,
              }}
              generateMarkdownPreview={markdown =>
                Promise.resolve(converter.makeHtml(markdown))
              }
            />
          </div>
        </div>
        <div className="col-xs-12 col-md-3">
          <div className=" is-white-bg pad-3">
            <p className="margin-1-t">
              {selectedTab === "preview"
                ? "Go back to editing your awesome article."
                : " Preview your article as it will appear on DesignRant."}
            </p>
            <button
              className="bubble-button border-radius fill-width"
              style={{ maxWidth: 450 }}
              onClick={switchTab}
            >
              {selectedTab === "preview" ? "Edit" : "Preview"}
            </button>
            <p className="margin-3-t">
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
