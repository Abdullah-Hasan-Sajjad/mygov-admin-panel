
import Dahsboard from "./components/dashboard/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AbedonView from "./components/abedon/AbedonView"
import DaakView from "./components/daak/DaakView"
import NathiView from "./components/nothi/NothiView"
import MainLayout from "./components/mainLayout/MainLayout"
import ErrorPage from "./components/mainComponents/ErrorPage"
import LoginForm from "./components/authentication/LoginForm"
import PrivateOutlet from "./components/protectedRoutes/PrivateRouteLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateOutlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <MainLayout><Dahsboard /></MainLayout>,
      },
      {
        path: "abedon",
        element: <MainLayout><AbedonView /></MainLayout>,
      },
      {
        path: "daak",
        element: <MainLayout><DaakView /></MainLayout>,
      },
      {
        path: "nothi",
        element: <MainLayout><NathiView /></MainLayout>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />)
};

export default App
