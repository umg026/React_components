import React, { useEffect, useState } from 'react'
import MarkDown from 'markdown-to-jsx'


function Markdown() {
  // Run This Cammand  :  npm i --save markdown-to-jsx
  const file_name = 'readme.md'
  const [post, setPost] = useState("")

  useEffect(() => {
    import(`./${file_name}`) // import Link Or External Link
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
      })
      .catch(err => console.log(err))

  }, [])


  return (
    <div>
      <MarkDown>
        {post}
      </MarkDown>
{/* 
      {/ <Dashboard_table /> /}
      {/ <Markdown /> /} */}
    </div>
  )
}

export default Markdown


