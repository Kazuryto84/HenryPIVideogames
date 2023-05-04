import {Home, Landing, Detail, Form} from "./Views/Index";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing/>
      </Route>

      <Route exact path="/detail">
        <Detail/>
      </Route>

      <Route exact path="/create">
        <Form/>
      </Route>
      
      <Route path="/home">
        <Home/>
      </Route>

    </div>
  );
}

export default App;
