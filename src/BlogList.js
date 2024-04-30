const BlogList = ({blogs, title, handleDelete}) => {  
    // BlogList=(props)=>, props is a Obj, {blogs: Array(3), title: " All Blogs ~", handleDelete= (id)=>{...}} blogs裡的的array
    // const arr = [1,2] const str ="string" const mer = {arr,str} // console.log(mer) {arr: Array(2), str: 'string'}

    return (  
        <div className="blog-list">
            <h2> { title } </h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key= { blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick= {()=> handleDelete(blog.id)}> Delete Blog</button>
                </div>
                
            ))}
        </div>
    );
}
 
export default BlogList;