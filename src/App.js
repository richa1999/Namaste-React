import {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [username, setusername] = useState();

  // authentication
  useEffect(() => {
    //Make an api call and send username and password

    const data = {
      name: "Richa ",
    }
    setusername(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: username, setusername }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
      },
	  {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
