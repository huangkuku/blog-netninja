import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("18");
    const history = useHistory()

    const handleRegister = (e)=>{
        e.preventDefault();
        const infro = {name, email, age};
        fetch("http://localhost:8000/members", {
            method:"POST",
            hearder: {"Content-Type":"application/json"},
            body: JSON.stringify(infro)
        })
        .then(()=>{
            setName("");
            setEmail("");
            history.push("/");
        })
    }

    return ( 
        <div className="register">
            <h2>Register</h2>
            <form>
                <label>Your Name: </label>
                <input
                type="text"
                required
                value={ name }
                onChange= { (e)=>{setName(e.target.value)} }>
                </input>
                <br/>
                <label>Your email: </label>
                <input
                type="text"
                required
                value={ email }
                onChange={ (e)=>{setEmail(e.target.value)}}>
                </input>
                <br/>
                <label>Your Age:</label>
                <input
                type="number"
                value={ age }
                onChange={(e)=>{setAge(e.target.value)}}>
                </input>
                <br/>
                <button onClick={ handleRegister }>Become a member</button>              
            </form>
        </div>
     );
}
 
export default Register;