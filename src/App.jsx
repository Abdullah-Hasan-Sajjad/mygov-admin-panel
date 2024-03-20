import MainFooter from "./components/Footer"
import InnerBody from "./components/innerBody/InnerBody"
import MainNavbar from "./components/Navbar"
import MainSidebar from "./components/Sidebar"
import Dahsboard from "./components/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <MainNavbar />
      <MainSidebar />
      <Dahsboard />
      <MainFooter />
    </>,
    //errorElement: <ErrorPage />,

  },
  {
    path: "/dashboard",
    element: 
    <>
      <MainNavbar />
      <MainSidebar />
      <Dahsboard />
      <MainFooter />
    </>,
    //errorElement: <ErrorPage />,

  },
]);


function App() {

  return (
    <RouterProvider router={router} />)
};

export default App
