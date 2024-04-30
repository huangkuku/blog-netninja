import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website ~ ~', body: 'lorem ipsum...', author: 'mario', id: 1 },
        {title: 'Welcome party !', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        {title: 'Web dev top tips ?', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    // 原本是const [ab, setAb] = useState(1)我們來看useState(),用what代替[ab, setAb] const what = useState(1), ab= what[0] //1 ,setAb= what[1] // ƒ dispatchSetState(fiber, queue, action)...
    const handleDelete= (id) =>{  // 這裡的id === BlogList.js的 blog.id
        const result = blogs.filter((blog)=> blog.id !== id)
        // blogs.filter((blog)=> blog.id === id) 符合條件為 blog.id 等於 id的,篩選出,其他都不要
        // blogs.filter((blog)=> blog.id !== id) 符合條件為 blog.id不等於id的,篩選出,其他都不要
        setBlogs(result)
    }

    // .map( ()=> () ) 為什麼" ()=> "的 右邊是"()" 因為要用template呈現 就像return () 
    return (  
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs ~" handleDelete={handleDelete} />
            {/* Home.js的 < BlogList blogs={ blogs } title="All Blogs ~"/> 
            BlogList.js的 const BlogList = (props) => {... 
            BlogList.js的 props就是 blogs={ blogs } title="All Blogs ~" ,props把它包成一個Obj*/}
        </div>
    );
}
 
export default Home;