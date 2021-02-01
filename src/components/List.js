import React from "react";
import Placeholder from "../components/Placeholder";
const Table = ({ columns = [], data = [], loading = false }) => {

  const travelObj = (obj = null, path, anyData = false) => {
    if (!path) return obj;
    const pathObj = path.split(".");
    let value = pathObj.reduce((cursor, pathPart) => cursor[pathPart], obj);
    if (anyData) return value;

    return typeof value !== "object" || value !== "function" ? value : "";
  };

  return (
    <>
      <ul className="list-group list-group-horizontal">
        {columns.map((column, key) =>
          <li key={key} className="list-group-item list-group-item-secondary list-group-item-action shadow">
            {column.header}
          </li>
        )}
      </ul>
      {loading && <ul className="list-group list-group-horizontal">
        {columns.map((v, k) =>
          <li key={k} className="list-group-item list-group-item-action shadow">
            <Placeholder />
          </li>
        )
        }
      </ul>
      }
      {
        data.map((value, key) =>
          <ul key={key} className="list-group list-group-horizontal">
            {columns.map((column, key2) => (
              <li key={key2} className={`list-group-item list-group-item-action shadow ${column.className}`}>
                {column.render
                  ? column.render(travelObj(value, column.accessor, true))
                  : travelObj(value, column.accessor)}
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
};

export default Table;