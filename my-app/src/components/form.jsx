import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Form extends Component {
    state = {
      name: "",
      surname: ""
    };

    handleInputChange = event => {
        const { target } = event;
        console.log('event', event)
    
        this.setState({
          [target.name]: target.value
        });
      };

      handleSubmit = event => {
        event.preventDefault();
        const { name, surname } = this.state;
        const result = `Hi ${name} ${surname}`;
        alert(result);
      };

      handleResetAll = event => {
        event.preventDefault();
        this.setState({
            name: "",
            surname: ""
          });
        };
    
      render() {
        const { name, surname } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                value={surname}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <input className="btn btn-primary" type="submit" value="Submit" />

            <button 
            onClick={this.handleResetAll}
            className="btn btn-light">
                Reset fields
            </button>

          </form>
        );
      }
    }
