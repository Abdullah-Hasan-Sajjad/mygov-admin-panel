import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Outlet, Link } from "react-router-dom";

export default function MainSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example" className="fixed hidden md:block">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <Link to={"/dashboard"}>
              ড্যাশবোর্ড
            </Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            আবেদন গ্রহণ
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            ডাক
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            নথি
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
