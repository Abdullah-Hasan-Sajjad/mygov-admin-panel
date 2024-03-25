import Auth from "./Authentication"
import { Navigate,Outlet } from "react-router-dom";

export default function PrivateOutlet(){
    const auth = Auth();

    return !auth ? <Outlet /> : <Navigate to="/login" />;
}