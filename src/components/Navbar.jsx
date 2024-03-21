import { Button, Navbar } from 'flowbite-react';
import MainDropdown from './Dropdown';
import { Outlet, Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="#"> 
        <img src="./src/assets/images/system-img/mygov-logo.png" className="mr-3 h-6 sm:h-9" alt="myGov Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 md:hidden">
        { /*<Button>Get started</Button>*/}
        <Navbar.Toggle />
      </div>
  
      <Navbar.Collapse>
        <Navbar className='sm:hidden'>
          <Link to={"/dashboard"}>
            ড্যাশবোর্ড
          </Link>
        </Navbar>
        <Navbar className='sm:hidden'>
          <Link to={"/abedon"}>
            আবেদন গ্রহণ
          </Link>
        </Navbar>
        <Navbar.Link href="#" className='sm:hidden'>ডাক</Navbar.Link>
        <Navbar.Link href="#" className='sm:hidden'>নথি</Navbar.Link>
        <MainDropdown dropdownSize={'small'} label={'ব্যবহারকারী'} dropdownItems={['Profile','Log Out']}/>  
      </Navbar.Collapse>
    </Navbar>
  );
}

 
 
 