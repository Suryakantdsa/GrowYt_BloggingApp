import React from 'react'
import NavBar from './NavBar'
import DisplayAllBlog from './DisplayAllBlog'
import useRetriveDataFromDB from '../Hooks/useRetriveDataFromDB'

const Body = () => {
    useRetriveDataFromDB()
    console.log("hi form body")
  return (
    <div className='w-screen'>
        <NavBar/>
        <DisplayAllBlog/>
    </div>
  )
}

export default Body