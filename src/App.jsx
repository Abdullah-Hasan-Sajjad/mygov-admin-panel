import MainFooter from "./components/Footer"
import Abedon from "./components/AbedonView"
import MainNavbar from "./components/Navbar"
import MainSidebar from "./components/Sidebar"
import Dahsboard from "./components/Dashboard"
import Daak from "./components/DaakView"
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
  {
    path: "/abedon",
    element: 
    <>
      <MainNavbar />
      <MainSidebar />
      <Abedon />
      <MainFooter />
    </>,
    //errorElement: <ErrorPage />,

  },
  {
    path: "/daak",
    element: 
    <>
      <MainNavbar />
      <MainSidebar />
      <Daak />
      <MainFooter />
    </>,
    //errorElement: <ErrorPage />,

  },
  {
    path: "/nathi",
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
