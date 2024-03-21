import MainFooter from "./Footer";
import MainNavbar from "./Navbar";
import MainSidebar from "./Sidebar";

export default function MainLayout({children}){
    return(
        <>
        <MainNavbar />
        <MainSidebar />
        {children}
        <MainFooter />
        </>
    );
}