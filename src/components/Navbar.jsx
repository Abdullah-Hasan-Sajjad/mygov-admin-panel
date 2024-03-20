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
        <Navbar.Link href="#" className='sm:hidden' active>ড্যাশবোর্ড</Navbar.Link>
        <Navbar.Link href="#" className='sm:hidden'>আবেদন গ্রহণ</Navbar.Link>
        <Navbar.Link href="#" className='sm:hidden'>ডাক</Navbar.Link>
        <Navbar.Link href="#" className='sm:hidden'>নথি</Navbar.Link>
        <MainDropdown dropdownSize={'small'} label={'ব্যবহারকারী'} dropdownItems={['Profile','Log Out']}/>  
      </Navbar.Collapse>
    </Navbar>
  );
}

 
 
 