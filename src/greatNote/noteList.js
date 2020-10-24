import React from "react";
import { Link } from "react-router-dom";

function NoteList() {
  return (
    <div>
      <ul>
        <Link to="/note-list/note-one">
          <li>Note One</li>
        </Link>
        <Link to="/note-list/note-two">
          <li>Note Two</li>
        </Link>
        <Link to="/note-list/note-three">
          <li>Note Three</li>
        </Link>
      </ul>
    </div>
  );
}

export default NoteList;
