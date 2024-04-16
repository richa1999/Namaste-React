import React from "react";
import ReactDOM from "react-dom";

// ResctElement creation without using JSX.
const heading = React.createElement(
	"h1",
	{
		id: "heading",
	},
	"Hello World from React"
);

// nested React.createElement
const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		// child passed as third param.
		React.createElement("h1", {}, "I'm h1 tag"), // siblings passed in array
		React.createElement("h2", {}, "I'm h2 tag"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I'm h1 tag"),
		React.createElement("h2", {}, "I'm h2 tag"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(parent);
root.render(parent);
