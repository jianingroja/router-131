import React from "react";

function Note({ match }) {
  return (
    <div>
      <h3>hello, this is {match.params.id}</h3>
    </div>
  );
}

export default Note;
