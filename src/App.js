import React, { useState } from "react";
import { connect } from 'react-redux';
import WordList from "./components/WordList";
import { addPalindrome, setVisibilityFilter, } from "./redux/actions";
import { VisibilityFilters } from "./redux/actions";
import Filter from "./components/Filter";

const URL_SERVER = 'https://toolbox-backend.joche26.repl.co'

const App = (props) => {
  const [word, setWord] = useState("");
  const [loading, setloading] = useState(false);
  const sendWord = () => {
    setloading(true);
    fetch(`${URL_SERVER}/iecho?text=${word}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        props.addPalindrome({ ...res, current: word });
        setloading(false);
        setWord('');
      })
      .catch(err => setloading(false))
  }


  const handleChange = ({ target: { value } }) => setWord(value);

  return (
    <div className="container">
      <div style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col 10">
            <input
              value={word}
              type="text"
              onChange={handleChange}
              className="form-control"
              placeholder="Escriba algún texto" />
          </div>
          <div className="col-2 d-grid gap-2">
            <button
              disabled={!word.trim()}
              onClick={sendWord}
              className="btn btn-dark">
              Enviar
            </button>
          </div>
        </div>
        <Filter action={props.setVisibilityFilter} />
      </div>
      <WordList loading={loading} data={props.palindromeReducer} />
    </div>
  )
};

const getVisibleAll = (all, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return all;
    case VisibilityFilters.SHOW_PALINDROME:
      return all.filter(word => word.palindrome);
    case VisibilityFilters.SHOW_IS_NOT_PALINDROME:
      return all.filter(word => !word.palindrome);
    default:
      throw new Error('Unknown filter: ' + filter);
  };
};

const mapStateToProps = state => ({
  palindromeReducer: getVisibleAll(state.palindromeReducer, state.visibilityFilter)
});

export default connect(mapStateToProps, {
  addPalindrome,
  setVisibilityFilter
})(App);