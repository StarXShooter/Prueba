import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Divs from "./views/divs";
import Contador from "./views/contador";


function App() {
  return(
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Divs</Link>
            </li>
            <li>
              <Link to="/Button">Contador</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Divs />
          </Route>
          <Route path="/Button">
            <Contador />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
