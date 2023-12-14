import React from 'react'

const NoBlogFound = () => {
  return (
    <div className='flex justify-center items-center p-4 mt-6 flex-col'>
        <img src="https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif" className='w-[500px] h-[250px]' alt="no blog found" />
        <h1 className="text-3xl font-bold text-center">No blog is created. Click on "Create a blog".</h1>
    </div>
  )
}

export default NoBlogFound