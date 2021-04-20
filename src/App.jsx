import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Films from "./pages/Films"
import FilmDetails from "./pages/FilmDetails"
import People from "./pages/People"
import PeopleDetails from "./pages/PeopleDetails"
import Species from "./pages/Species"
import SpeciesDetails from "./pages/SpeciesDetails"


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/films/:filmid">
          <FilmDetails />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/people/:peopleid">
          <PeopleDetails />
        </Route>
        <Route exact path="/species">
          <Species />
        </Route>
        <Route exact path="/species/:speciesid">
          <SpeciesDetails />
        </Route>
        <Route exact path="*">
          {() => <h1>404</h1>}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App