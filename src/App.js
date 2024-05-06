import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
	return <div className="app">
		<Header />
		<Body />
	</div>
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />
	},
	{
		path: "/about",
		element: <AboutPage />
	},
	{
		path: "/contact",
		element: <ContactPage />
	}
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
