import React from "react";
import ReactDOM from "react-dom";

//REct.createElement => returns objext => HTMLElement(render)

const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Namaste JAvascript"
);

console.log(heading);

// JSX transpiled before it goes to JS engine. - parcel - package babel.

// JSX => React.createElement => object => HTML

const jsxHeading = <h1 id="heading"> Namaste React </h1>;

console.log(jsxHeading);

const Title = () => (
	<h1 id="heading"> Namaste from concise functional component </h1>
);

// Component Composition => putting one component in another component.
const HeadingComponent = () => {
	return (
		<>
			<Title />
			<h1 id="heading"> Namaste from functional component </h1>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
