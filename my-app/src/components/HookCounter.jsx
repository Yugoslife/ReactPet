import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function HookCounter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button 
                onClick={() => setCount(count +1)}
                className="btn btn-primary btn-sm m-2">
                Click me
            </button>
        </div>
    );
}