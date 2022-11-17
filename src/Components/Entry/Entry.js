import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Entry.css";

export const Entry = ({ entryList }) => {
  return (
    <div className="cards">
      {entryList.map((entry) => {
        return (

          <div key={entry.id} className="treeCard">
              <h2>{entry.common_name}({entry.family_name})</h2>
              <p>{entry.sci_name}</p>
              <Link to={`${entry.id}`}> >> </Link>
          </div>
        );
      })}
    </div>
  );
};
