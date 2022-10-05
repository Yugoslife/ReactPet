import NavBar from './components/navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters';
import React, { Component } from 'react';
import { HookCounter } from './components/HookCounter';
import Form from "./components/form";

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

 componentDidMount() {
  console.log('App - Mounted')
 }

handleIncrement = counter => {
const counters = [...this.state.counters];
const index = counters.indexOf(counter);
counters[index] = {...counter};
counters[index].value++;
this.setState({counters});
}

handleReset = () => {
const counters = this.state.counters.map( c => {
c.value=0;
return c;
})
this.setState({})
}

 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
 }
  render () {
    console.log('App - Rendered')
    
  return (
      <React.Fragment>
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
      <main className='container'>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onDelete={this.handleDelete}
        onIncremet={this.handleIncrement}
        />
        <div>
          <HookCounter/>
            <h3 className="exercise-title">Exercise 2 - Form</h3>
            <Form />
          </div>
      </main>
      </React.Fragment>
    )
  }
}

export default App;
