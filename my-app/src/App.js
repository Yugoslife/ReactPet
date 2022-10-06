import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Form } from "./components/form";

class App extends Component {
  state = { 
    counters: [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
 };

 constructor () {
  super();
  console.log('App - constructor');
 }


  render () {
    console.log('App - Rendered')
    
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
