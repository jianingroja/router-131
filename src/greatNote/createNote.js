import React, { useState } from "react";
import { useParams } from "react-router-dom";

//用不了
//ref？
function CreateNote() {
  return (
    <div>
      <input placeholder="Wrtie a Note"></input>
      <button>Create</button>
    </div>
  );
}

export default CreateNote;
