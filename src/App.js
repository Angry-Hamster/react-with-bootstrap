import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Home, About, Contacts } from "./pages";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route component={Home} path= "/" exact />
          <Route component={About} path="/about"/>
          <Route component={Contacts} path="/contacts"/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
