import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect( ()=>{
        console.log("useEffect re-render")
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            console.log(data)
            setBlogs(data)
        })
    }, []) // [條件], re-render條件(跑useEffect()) 

    return (  
        <div className="home">
            {blogs && <BlogList blogs={ blogs } title="All Blogs ~" />}
            
        </div>
    );
}
 
export default Home;