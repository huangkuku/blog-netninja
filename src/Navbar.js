import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* prevent the request to the server */}
                <Link to="/create">New Blog</Link> {/*看開發人員Element 點Home、New Blog會發現刷新程度跟<a>不一樣 */}
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;