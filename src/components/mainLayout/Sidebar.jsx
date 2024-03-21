import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Outlet, Link } from "react-router-dom";

export default function MainSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example" className="fixed hidden md:block">
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Link to={"/dashboard"}>
            <Sidebar.Item icon={HiChartPie}>
              ড্যাশবোর্ড
            </Sidebar.Item>
          </Link>

          <Link to={"/abedon"}>
            <Sidebar.Item icon={HiViewBoards} label="Pro" labelColor="dark">
              আবেদন গ্রহণ
            </Sidebar.Item>
          </Link>

          <Link to={"/daak"}>
            <Sidebar.Item icon={HiInbox} label="3">
              ডাক
            </Sidebar.Item>
          </Link>

          <Link to={"/nathi"}>
            <Sidebar.Item icon={HiShoppingBag}>
              নথি
            </Sidebar.Item>
          </Link>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
