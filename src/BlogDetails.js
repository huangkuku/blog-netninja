import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFecth";

const BlogDetails = () => {
    const { id } = useParams(); // Route Parameters grap the parameter from the /:id
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/'+ id, { // 'id' or 'blog.id' from { id } = useParams(); or {data: blog, ...} = useFetch...
            method:"DELETE"
        })
        .then(()=>{
            history.push("/")// go back home page
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={ handleClick }>Delete blog</button>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails;