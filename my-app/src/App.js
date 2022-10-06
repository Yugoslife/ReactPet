import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Form } from "./components/form";

class App extends Component {

  render () {
  return (
      <React.Fragment>
      <main/>
        <div>
            <h3 className="exercise-title">Test Form #1</h3>
            <Form />
          </div>
      </React.Fragment>
    )
  }
}

export default App;
