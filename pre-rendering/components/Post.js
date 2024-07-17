import React from 'react'

function Post({posts}) {
  return (
    <div>
        <ul>
        {
            posts.map(post => (
                <li key={post.id}>{post.title} <hr /></li>
            ))
        }
      </ul>
    </div>
  )
}

export default Post
