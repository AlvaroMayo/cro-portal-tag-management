import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./view/landing/landing";
import Offers from "./view/offers/offers";
import Policies from "./view/policies/policies";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/policies">
            <Policies />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
