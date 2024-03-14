import { Footer } from 'flowbite-react';

export default function MainFooter() {
  return (
    <div className='md:ml-64 sticky bottom-0 left-0 right-0'>
        <Footer container>
        <Footer.LinkGroup className='flex items-center text-xs'>
            <Footer.Link >পরিকল্পনা ও বাস্তবায়নে</Footer.Link >
            <Footer.Brand
            href="#"
            src="./src/assets/images/system-img/a2i-logo-set.png"
            alt="a2i-logo-set"
          />
        </Footer.LinkGroup>
        
        <Footer.LinkGroup className='flex items-center  text-xs'>
            <Footer.Link href="#">কারিগরি সহযোগিতায়</Footer.Link>
            <Footer.Brand
            href="#"
            src="./src/assets/images/system-img/orangebd-logo.png"
            alt="orangebd-logo.png"
          />
        </Footer.LinkGroup>
        </Footer>
    </div>
  );
}
