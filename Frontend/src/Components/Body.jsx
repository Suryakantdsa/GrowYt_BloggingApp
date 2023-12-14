import React from 'react'
import NavBar from './NavBar'
import DisplayAllBlog from './DisplayAllBlog'
import useRetriveDataFromDB from '../Hooks/useRetriveDataFromDB'
import Message from './Message'
import { useSelector } from 'react-redux'

const Body = () => {
  const message = useSelector((store) => store.config);
    useRetriveDataFromDB()
  return (
    <div className='w-screen'>
        <NavBar/>
        <DisplayAllBlog/>

        {message && <Message />}
    </div>
  )
}

export default Body