import React from 'react'

export default function BlogList({blogs, title}) {
  return (
    <div>

        <h2>{title}</h2>
          {blogs.map((item)=>(
          <div className="blog-preview" key={item.id}>
            <h3>{item.title}</h3>
            <p>written by {item.author}</p>
            <button></button>
          </div>
          
        
        
        ))}
    </div>
  )
}
