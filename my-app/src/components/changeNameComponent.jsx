import React, { PureComponent } from "react";

class ChangeNameComponent extends PureComponent {
  constructor(props) {
    super(props);
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
