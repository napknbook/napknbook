import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './napkns/home';

function App() {
  
  return (
    <div className="App">

    <BrowserRouter>

    <Switch>

  <Route exact path="/">
    <Home />
  </Route>

  <Route exact path="/aim">
    <Home />
  </Route>

  <Route exact path="/multi">
    <Home />
  </Route>

  <Route exact path="/napknbook">
    <Home />
  </Route>
  

</Switch>

</BrowserRouter>
      
    </div>
  );
}

export default App;
