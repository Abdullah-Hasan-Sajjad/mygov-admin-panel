import MainFooter from "./components/Footer"
import InnerBody from "./components/innerBody/InnerBody"
import MainNavbar from "./components/navbar/Navbar"
import MainSidebar from "./components/Sidebar"


function App() {
  
  return (
    <> 
    <MainNavbar />
    <MainSidebar />
    <InnerBody></InnerBody>
    <MainFooter />
    </>
  )
};

export default App
