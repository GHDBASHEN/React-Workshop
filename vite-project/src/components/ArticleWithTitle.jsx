import React from 'react'

function ArticleWithTitle(props) {
  return (
    <>
    <h3>{props.title}</h3>
    <p>{props.para}</p>
    </>
  )
}

export default ArticleWithTitle