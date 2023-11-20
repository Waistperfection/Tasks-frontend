import React from 'react'
import Comment from './Comment'

function Comments({comments}) {
  return (
    <ul style={{paddingLeft: "10px"}}>
        {comments.map(comment => <Comment>{comment}</Comment>)
        }
    </ul>
  )
}

export default Comments