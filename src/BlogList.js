const BlogList = ({blogs, title}) => {  
    // BlogList=(props)=>, props is a Obj, {blogs: Array(3), title: " All Blogs ~", handleDelete= (id)=>{...}} blogs裡的的array

    return (  
        <div className="blog-list">
            <h2> { title } </h2>
            {blogs.map( blog =>(
                <div className="blog-preview" key= { blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
                
            ))}
        </div>
    );
}
 
export default BlogList;