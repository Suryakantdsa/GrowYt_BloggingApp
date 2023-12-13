import React from 'react'
import NavBar from './NavBar'

const EditBlog = () => {
  return (
    <>
    <NavBar/>
    <div className='w-full p-4 '>
        <h1 className='text-3xl font-bold text-center'>Edit blog page</h1>
        <div className='flex flex-col'>
        <label htmlFor="title" className='text-3xl font-bold '>Title</label>
        <input type="text" id='title' placeholder='Enter the Title here' className='text-lg outline-none border-b-[1px] border-orange-400 my-2' />
        </div>
        <textarea
                name="body"
                id="body"
                cols="100"
                rows="5"
                placeholder="Write the body ...!"
                className="w-full p-2 rounded-md border focus:outline-none focus:border-orange-400 mt-4 text-lg"
                />
        <button className='bg-orange-700 text-white px-4 py-2 mt-2 font-semibold  rounded-sm shadow-2xl'>Publish</button>
    </div>
    
                </>
  )
}

export default EditBlog