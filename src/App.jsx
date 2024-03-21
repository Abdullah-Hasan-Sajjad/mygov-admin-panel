import MainFooter from "./components/Footer"
import MainNavbar from "./components/Navbar"
import MainSidebar from "./components/Sidebar"
import Dahsboard from "./components/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AbedonView from "./components/AbedonView"
import DaakView from "./components/DaakView"
import NathiView from "./components/NathiView"

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
      <AbedonView />
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
      <DaakView />
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
      <NathiView />
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
