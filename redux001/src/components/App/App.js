import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from '../Hello/Hello'

import { createStore } from 'redux';

const defaultState = { checked: false };
const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked };
    default:
  }

  return state;
}

const store = createStore(reducer);

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    store.subscribe(
      () => this.setState(store.getState())
    );
  }

  render() {
    const onClick = () => store.dispatch({ type: 'TOGGLE' });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <h1>To-dos</h1>
          <div>
            Learn Redux&nbsp;
            <input type="checkbox" checked={!!this.state.checked} onClick={onClick} />
          </div>
          {
            this.state.checked ? (<h2>Done!</h2>) : null
          }
        </div>

        <Hello />
      </div>
    );
  }
}

export default App;
