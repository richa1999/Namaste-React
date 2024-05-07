import React from "react";
import UserClass from "./UserClass";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return <div>
      <h1>About</h1>
      <UserClass name={"Richa"} location={"Ghaziabad"} contact={"@richasr07"}/>
    </div>
  }
};

export default AboutPage;
