import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import HotelSearch from "./pages/HotelSearch/HotelSearch";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotel/" exact component={HotelSearch} />
          <Route path="/hotel/:id" exact component={HotelDetail} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
