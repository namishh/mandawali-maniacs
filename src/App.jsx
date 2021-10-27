import {Switch, Route} from "react-router-dom"
import Home from "./views/Home";
import About from "./views/About";
import Merch from "./views/Merch";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/merchandise" exact component={Merch}/>
      </Switch>
    </div>
  );
}

export default App;
