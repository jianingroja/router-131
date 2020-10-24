import React from "react";
import "./index.css";

function InfoCenter() {
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
            <li className="info">
              {key.toUpperCase()}: {info[key].toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoCenter;
