import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
   state = {
    value: this.props.value
   };
   
handleIncrement = () => {
    console.log("PRO", this.props)
    this.setState({value: this.state.value +1});
};

render() { 
    return ( 
        <div>
            <span className={this.getBadgeClasses()}> {this.state.value}</span>
            <button 
            onClick = {this.handleIncrement} 
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