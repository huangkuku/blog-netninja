import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("yoshi")
    const [isPending, setIsPending]=useState(false); // when I press button 'Add blog' , add a 'loading ...'
    const history =useHistory() // need to invoke this hook, 'history' is a Obj

    const handleSubmit =(e)=>{ // in tag form function()
      e.preventDefault() // to prevent default action: refresh the page after press the button
      const blog = { title, body, author}  // 把<input>內的value = {title},<textarea>內的value = {body},<select>內的value = {author}存到'blog'變數中
      
      setIsPending(true) // loading...出現
      
      fetch("http://localhost:8000/blogs",{
        method:"POST",
        header: {"Content-Type":"application/json"},
        body: JSON.stringify(blog)
      })
      .then(()=>{
        console.log('create a new blog!')
        setIsPending(false) // loading...消失
        // history.go(-1)  go back one
        history.push("/") // redirect home page path="/"
      })
      .catch(error =>{
        console.log(error.messenage)
      })
    }  

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input
                  type="text"
                  required
                  value = { title }
                  onChange= { (e)=> setTitle(e.target.value) }
                />
                <label>Blog Body:</label>
                <textarea 
                  required
                  value= { body }
                  onChange= { (e)=> setBody(e.target.value) }
                ></textarea>
                <label>Blog Author:</label>
                <select
                  // 如果你沒有選擇'誰'(也就是你沒有改變原樣), author會默認useState('yoshi'); 如果useState為'', 因為你沒有選 所以author默認為''
                  value= { author } 
                  onChange= { (e)=> setAuthor(e.target.value) }   
                >
                  <option value="mario" >mario</option>
                  <option value="yoshi" >yoshi</option>
                </select>                 
                { isPending && <button>Adding blog...</button> }  {/* isPending is false */}  
                { !isPending && <button>Add blog</button> }   {/* !isPending is 'not false' = true */}                         
            </form>
        </div>
     );
}
 
export default Create;