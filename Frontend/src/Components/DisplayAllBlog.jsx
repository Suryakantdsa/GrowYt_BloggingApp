import React from 'react'
import BlogCard from './BlogCard'
import Shimmer from './Shimmer'

const DisplayAllBlog = () => {
  return (
    <div className='px-10 flex items-center flex-col border border-red-700 '>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <Shimmer/>
    </div>
  )
}

export default DisplayAllBlog