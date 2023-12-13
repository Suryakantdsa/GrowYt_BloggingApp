import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const DisplayBlogOnclick = () => {
    const navigate=useNavigate()
    const handleEdit=()=>[
 navigate("/blog/edit")
    ]
  return (
    <>
    <NavBar/>
    <div className="px-10 w-full flex flex-col mt-2">
      <header className=" flex justify-between ">
        <div className="">
          <h1 className="text-2xl font-bold ">My blogs</h1>
          <p className="italic text-sm">Dec 12 2023</p>
        </div>
        <div>
          <button onClick={handleEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="pl-2">
            <i className="fa-solid fa-trash text-red-500"></i>
          </button>
        </div>
      </header>
      <article className="py-2 text-slate-700">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos in pariatur fuga. Quos porro aut laboriosam voluptates dolores aperiam beatae molestias? Distinctio quae voluptatum, explicabo saepe reprehenderit voluptates dicta ut. Quis voluptas vero adipisci nesciunt fugit maiores dignissimos praesentium dolorum perferendis, fuga natus quibusdam veritatis enim ipsum libero sed doloribus ex tempora iure magnam alias et? Modi, distinctio tempora.</p>
      </article>
    </div>
    </>
  )
}

export default DisplayBlogOnclick