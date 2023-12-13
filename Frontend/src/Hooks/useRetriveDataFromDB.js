import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addBolgfromDb } from "../store/Slice/BlogSlice";


const useRetriveDataFromDB = () => {
    const blogsInStore = useSelector((store) => store.blog);
    const dispatch = useDispatch();

    const GetBlog = async () => {
        const data = await fetch(
            `http://localhost:8000`
        );
        const json = await data.json();
        const BlogArray = json;
        console.log(BlogArray)
        dispatch(addBolgfromDb(BlogArray));
    };

    useEffect(() => {
        //memoization techinic
        !blogsInStore && GetBlog();
    }, []);
};

export default useRetriveDataFromDB;
