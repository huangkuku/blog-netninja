import BlogList from "./BlogList";
import MemberList from "./MemberList";
import useFetch from "./useFecth";


const Home = () => {
    const { isPending, error, data: blogs }= useFetch('http://localhost:8000/blogs') 
    const { data: members }= useFetch('http://localhost:8000/members')

    return (  
        <div className="home">
            { error && <div>{ error }</div> } {/* 一開始為null, 若有改變setError(error.message)，則執行右邊的code */}
            { isPending && <p>Loading...</p> } {/* true, 執行&&右邊的code; 當fetch server完成時變成false,不執行&&右邊的() */}
            { blogs && <BlogList blogs={ blogs }/> }
            { members && <MemberList members={ members } title=" All members" /> }
        </div>
    );
} 
export default Home;