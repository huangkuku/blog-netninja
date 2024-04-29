const Home = () => {
    const handleClick = (e)=>{
        console.log("Click me!", e)
    }
    const handleClicktwo = ()=>{
        console.log("Click me only first render")
    }
    const handleClickAgain = (e)=>{
        console.log(e.type, e.target, e.target.innerHTML)
    }
    const name ="lulu"
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick={ handleClicktwo() }>Click me only first render</button>
            <button onClick={(e)=>handleClickAgain(e)}> { name } </button>
        </div>
    );
}
 
export default Home;