import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website ~ ~', body: 'lorem ipsum...', author: 'mario', id: 1 },
        {title: 'Welcome party !', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        {title: 'Web dev top tips ?', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const handleDelete= (id) =>{  // 這裡的id === BlogList.js的 blog.id
        const result = blogs.filter((blog)=> blog.id !== id)
        // blogs.filter((blog)=> blog.id === id) 符合條件為 blog.id 等於 id的,篩選出,其他都不要
        // blogs.filter((blog)=> blog.id !== id) 符合條件為 blog.id不等於id的,篩選出,其他都不要
        setBlogs(result)
    }
    const [name, setName] = useState("Linda")
    useEffect( ()=>{
        console.log("useEffect re-render")
        console.log(name)
    }, [name]) // [條件], re-render條件(跑useEffect()) 如果為空的[],則只有第一次渲染，才會跑useEffect() [name],name改變時跑useEffect()

    return (  
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs ~" handleDelete={handleDelete} />
            {/* BlogList.js的 props就是 <BlogList>的 blogs={ blogs } title="All Blogs ~"handleDelete={handleDelete} ,props把它包成一個Obj*/}
            <button onClick={()=> setName("Amy")}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;