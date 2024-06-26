import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Register from './Register';
import MemberDetails from './MemberDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* switch沒包navbar,所以點home或about等,navbar不會換 */}
        <div className="content">
          <Switch> {/* switch包著的'route'會換(網)頁面 點home 換home頁面 點about換about頁面 */}
            <Route exact path="/">  {/* Home專屬的route (路由) 加個'exact',精確地 match 該路由位址* 如果沒加 輸入'/creat'會先match到'/'該路由位址*/}
              <Home />
            </Route>
            <Route exact path="/create"> {/* create的路由 */}
              <Create />
            </Route>
            <Route exact path="/blogs/:id"> {/* create的路由 */}
              <BlogDetails />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/members/:id"> {/* create的路由 */}
              <MemberDetails />
            </Route>
            <Route path="*"> {/* "*" lock catch any other route 只要沒匹配上面任一路由 都會被這個路由'抓到',ex:http://.../csdhfi;oh*/}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
