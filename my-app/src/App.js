import NavBar from './components/navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className='container'>
      <Counters />
    </main>
    </React.Fragment>
  )
}

export default App;
