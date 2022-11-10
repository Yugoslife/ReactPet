import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Form } from "./components/form";
import {TableContainer} from './components/tableContainer'
import PureClassComponent from './components/pureClassComponent'



class App extends Component {

  render () {
  return (
      <React.Fragment>
      <main/>
        <div>
        <TableContainer />
          <h1 className="exercise-title">Test Form #1</h1>
            <Form />
            <PureClassComponent />
          </div>
      </React.Fragment>
    )
  }
}

export default App;
