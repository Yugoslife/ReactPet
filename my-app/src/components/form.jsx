import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Form () {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');


    const handleInputChangeName = event => {
        const { target } = event;
        console.log('event', event)
        setName(target.value);
      };

    const handleInputChangeSurname = event => {
        const { target } = event;
        console.log('event', event)
        setSurname(target.value);
      };

    const  handleSubmit = event => {
        event.preventDefault();
        const result = `Hi ${name} ${surname}`;
        alert(result);
      };

    const handleResetAll = event => {
        event.preventDefault();
        setName('');
        setSurname('')
        };
    
        return (
          <form
          onSubmit={handleSubmit}
          >
            <label>
              Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChangeName}
                />
            </label>
            <br />
            <label>
              Surname:
                <input
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={handleInputChangeSurname}
                />
            </label>
        <br />
                <button
                    className="btn btn-primary" type="submit" value="submit">
                    Submit
                </button>
                
                <button
                    onClick={handleResetAll}
                    className="btn btn-secondary" type="" value="">
                    Reset
                </button>
        </form>
        );
    }
