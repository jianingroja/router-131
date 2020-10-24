import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function GreateNote() {
  return (
    <Router>
      <div>
        <nav>
          <h2>Great Note</h2>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/info-center">
              <li>个人中心 </li>
            </Link>

            <Link to="/create-note">
              <li>创建笔记 </li>
            </Link>

            <Link to="/note-list">
              <li>笔记列表 </li>
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/info-center">
            <Info />
          </Route>
          <Route path="/create-note">
            <CreateNote />
          </Route>
          <Route path="/note-list">
            <NoteList />
          </Route>
          {/* how to make it default?? */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home sweet Home! This is a Welcome Page!</h2>
    </div>
  );
}

function Info() {
  const info = {
    name: "mica red",
    nationality: "norwegian",
    eyecolor: "green",
  };
  return (
    <div>
      <ul>
        {Object.getOwnPropertyNames(info).map((key) => {
          return (
            <li>
              {key.toUpperCase()}: {info[key].toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CreateNote() {
  return (
    <div>
      <input placeholder="pleace enter note"></input>
      <button>Create</button>
    </div>
  );
}

function NoteList() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Note List</h2>
      <ul>
        <li>
          <Link to={`${url}/note-one`}>Note One</Link>
        </li>
        <li>
          <Link to={`${url}/note-two`}>Note Two</Link>
        </li>
        <li>
          <Link to={`${url}/note-three`}>Note Three</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Click Note Title to Read...</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Note />
        </Route>
      </Switch>
    </div>
  );
}

function Note() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
