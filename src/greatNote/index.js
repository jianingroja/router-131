import React from "react";
import Nav from "./nav";
import InfoCenter from "./infoCenter";
import CreateNote from "./createNote";
import NoteList from "./noteList";
import Note from "./note";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info-center" component={InfoCenter} />
          <Route path="/create-note" component={CreateNote} />
          <Route path="/note-list" exact component={NoteList} />
          <Route path="/note-list/:id" component={Note} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

export default App;
