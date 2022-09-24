import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncremet } = this.props;
        return (
        <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">
                Reset
            </button>
        {counters.map(counter =>  ( 
        <Counter 
        key={counter.id} 
        onDelete={onDelete}
        onIncremet={onIncremet}
        counter={counter}
        />
        ))}
        </div>
        );
    };
}
 
export default Counters;