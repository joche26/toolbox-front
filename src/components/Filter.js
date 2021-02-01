import React, { useState } from 'react';
import { VisibilityFilters } from '../redux/actions';

const Filter = ({ action }) => {

  const [index, setIndex] = useState(1);

  const handleAction = (i, key) => () => {
    action(key);
    setIndex(i);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col 4 d-grid gap-2">
          <button
            className={`btn ${index === 1 ? 'btn-success' : 'btn-dark'}`}
            onClick={handleAction(1, VisibilityFilters.SHOW_ALL)}>
            Todos
          </button>
        </div>
        <div className="col 4 d-grid gap-2">
          <button
            className={`btn ${index === 2 ? 'btn-success' : 'btn-dark'}`}
            onClick={handleAction(2, VisibilityFilters.SHOW_PALINDROME)}>
            Palindromos
        </button>
        </div>
        <div className="col 4 d-grid gap-2">
          <button
            className={`btn ${index === 3 ? 'btn-success' : 'btn-dark'}`}
            onClick={handleAction(3, VisibilityFilters.SHOW_IS_NOT_PALINDROME)}>
            No palindromos
         </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;