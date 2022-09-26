import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
componentDidUpdate(prevProps, prevState){
console.log('PrevProps', prevProps);
console.log('PrevState', prevState);
if (prevProps.counter.value !== this.props.counter.value) {
}
}

componentWillUnmount(){
    console.log('Counter - Unmount')
}

render() { 
    console.log('Counter - Rendered')
    return ( 
        <div>
            <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button 
            onClick = {()=> this.props.onIncremet(this.props.counter)} 
            className='btn btn-secondary btn-sm'
            >
            Increment
            </button>

            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-warning btn-sm m-2"
            >
                Delete
            </button>
        </div>
        );
}

getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.props.counter.value === 0 ? 'danger' : 'primary';
    return classes;
}

formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
}

}
 
export default Counter; 