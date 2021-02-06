import React, { Component, Suspense } from 'react'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Suspense fallback='loading...'>
        <Switch>
          {routes.map((e) => {
            return(
              <Route key={e.path} {...e}/>
            )
          })}
        </Switch>
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
