import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
      }
   

handleIncrement = product => {
    console.log(product);
    this.setState({count: this.state.count +1});
}

doHandleIncrement = () =>{
    this.handleIncrement({ id:1 })
}

render() { 
    return ( 
        <div>
            <span className={this.getBadgeClasses()}> {this.state.count}</span>
            <button 
            onClick={ () => this.handleIncrement ({ id:1 })}
            className='btn btn-secondary btn-sm'
            >
            Increment
            </button>
        </div>
        );
}

formatCount() {
    console.log('Counted');
}

getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'danger' : 'primary';
    return classes;
}
}
 
export default Counter; 