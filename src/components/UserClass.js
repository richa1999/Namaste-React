import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    // console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child ComponentWillUnmount");
  }
  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, contact } = this.props;
    // never update the state variable directly
    // const { count, count1 } = this.state;
    return (
      <div className="userCard">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{contact}</h3>
      </div>
    );
  }
}

/* 

Parent Constructor
Parent Render

First Child Constructor
First Child Render

Second Child Constructor
Second Child Render

<DOM UPDATED - IN SINGLE BATCH>

First Child ComponentDidMount
Second Child ComponentDidMount

Parent ComponentDidMount

*/

export default UserClass;
