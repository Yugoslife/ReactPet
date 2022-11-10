import React, { Component } from "react";

class ChangeNameComponent extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, this.props.name);
    return this.props.name === nextProps.name;
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <p> Name is : {this.props.name} </p>
      </div>
    );
  }
}
export default ChangeNameComponent;
