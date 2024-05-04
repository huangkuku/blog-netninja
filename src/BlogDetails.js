import { useParams } from "react-router-dom";
import useFetch from "./useFecth";

const BlogDetails = () => {
    const { id } = useParams(); // Route Parameters grap the parameter from the /:id
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+ id);

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails;