import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutPage extends React.Component {
  static contextType = UserContext;

  render() {
    const { loggedInUser } = this.context;

    return (
      <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">About Us</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Logged In User</h2>
          <p className="text-blue-600 font-medium">{loggedInUser}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to build user-friendly, performant web applications that solve real-world problems.
            We value clean code, continuous learning, and user-centric design.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Meet our dedicated team of developers, designers, and product managers who work tirelessly to deliver
            the best experience possible.
          </p>
          <UserClass name="Richa" location="Ghaziabad" contact="@richasr07" />
          {/* You can add more team members here */}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            Feel free to reach out to us via email at <a href="mailto:contact@ourapp.com" className="text-blue-500 underline">contact@ourapp.com</a> or call us at (123) 456-7890.
          </p>
        </section>
      </div>
    );
  }
}

export default AboutPage;
