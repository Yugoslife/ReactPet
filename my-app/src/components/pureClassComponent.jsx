import React, { Component } from "react";
import ChangeNameComponent from "./changeNameComponent";

class PureClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.handleInputChangeName = this.handleInputChangeName.bind(this);
  }

  handleInputChangeName = (event) => {
    const target = event.target[0];
    debugger;
    console.log("handleInputChangeName", target.value);
    this.setState({ name: target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleInputChangeName}>
          <input type="text" />
          <button type="submit" value="submit">
            Change Name
          </button>
        </form>
        <ChangeNameComponent name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default PureClassComponent;
