import React from 'react'
import Comment from './Comment'

function Comments({comments, workers}) {
  return (
    <ul style={{paddingLeft: "10px"}}>
      {/* TODO refactor key prop */}
        {comments.map(comment => <Comment key={Math.ceil(Math.random()*10000)} workers={workers}>{comment}</Comment>)
        }






        
    </ul>
  )
}

export default Comments