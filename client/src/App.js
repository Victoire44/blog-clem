import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Clemence from "./pages/Clemence"



export default function App() {
  return (
    <Router>
      <Helmet>
        <title>Clémence B.</title>
        <body style="margin: 0"></body>
      </Helmet>
      <Route exact path="/" component={Home} />
      <Route exact path="/clemence" component={Clemence} />
    </Router>
  )
}