
import Dahsboard from "./components/dashboard/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AbedonView from "./components/abedon/AbedonView"
import DaakView from "./components/daak/DaakView"
import NathiView from "./components/nothi/NothiView"
import MainLayout from "./components/mainLayout/MainLayout"
import ErrorPage from "./components/mainComponents/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> <Dahsboard /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <MainLayout><Dahsboard /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/abedon",
    element: <MainLayout><AbedonView /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/daak",
    element: <MainLayout><DaakView /></MainLayout>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nathi",
    element: <MainLayout><NathiView /></MainLayout>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />)
};

export default App
