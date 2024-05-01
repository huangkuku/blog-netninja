import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFecth";

const Home = () => {
    // const [one, setOne]= useState(1); one=1, setOne= func()/改變後的one; useState is [初始值,改變後的值]
    const { data: blogs, isPending, error }= useFetch('http://localhost:8000/blogs') 
    // useFetch() is Obj:{東西1,東西2,...}, useFetch(url) url是http... 之後使用useFetch只要換url就好
    console.log("data: blogs內容", blogs) // null; array(2) [{…}, {…}]
    return (  
        <div className="home">
            { isPending && <p>Loading...</p> } {/* true, 執行&&右邊的code; 當fetch server完成時變成false,不執行&&右邊的() */}
            { error && <div>{ error }</div> } {/* 一開始為null, 若有改變setError(error.message)，則執行右邊的code */}
            { blogs && <BlogList blogs={ blogs } title="All Blogs ~"/> }
        </div>
    );
} 
export default Home;