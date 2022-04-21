import * as React from "react"
const _ = require("lodash")
const TagsList = ({ tags }) => {

  return (
    <ul className="tags">
      {tags.map(t => 
        <li className="tag"><a href={`tags/${_.kebabCase(t)}`}>{t}</a></li>
      )}
    </ul>
  )
}

export default TagsList

