import { useParams, useHistory} from "react-router-dom";
import useFetch from "./useFecth";

const MemberDetails = () => {
    const { id } = useParams();
    const { data:members, isPending, error } = useFetch("http://localhost:8000/members/"+id) 
    const history = useHistory();  

    const handleDelete = ()=>{
        fetch("http://localhost:8000/members/"+id, {
            method:"DELETE"
        })
        .then(()=>{
            history.push("/") // .push() redirect home page
        })
    }
    return (
        <div>
            <h1>個人頁面</h1>
            {isPending && <h3>Loading your invidiual information...</h3>}
            {error && <p>{ error }</p>}
            {members && (
                <article>
                    <div>{ members.name }</div>
                    <div>{ members.email }</div>
                    <div>{ members.age }</div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>   
            )}
        </div> 
     );
}
 
export default MemberDetails;