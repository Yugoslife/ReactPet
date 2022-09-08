import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
      }
   

handleIncrement = product => {
    console.log(product);
    this.setState({value: this.state.value +1});
}

doHandleIncrement = () =>{
    this.handleIncrement({ id:1 })
}

render() { 
    console.log(this.props);

    return ( 
        <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}> {this.state.value}</span>
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
    classes += this.state.value === 0 ? 'danger' : 'primary';
    return classes;
}
}
 
export default Counter; 