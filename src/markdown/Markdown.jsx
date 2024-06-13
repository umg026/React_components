import React, { useEffect, useState } from 'react'
import MarkDown from 'markdown-to-jsx'
import redame from './readme.md'

function Markdown() {
  // Run This Cammand  :  npm i --save markdown-to-jsx
  const [post, setPost] = useState("")

  useEffect(() => {
    fetch(redame)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then(text => setPost(text))
      .catch(err => console.log(err));

  }, [])


  return (
    <div>
      <MarkDown>
        {post}
      </MarkDown>
  
    </div>
  )
}

export default Markdown


