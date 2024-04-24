import React, {useState } from "react";
import { Sidebar } from "../components/sidebar";
import Navbar  from "../components/navbar";
import Footer from "../components/Footer";
import Indicator_card from './ui/indicators';

const Layout = ({ children}) => {
  const [showsidebar, setShowSideBar] = useState(true);


  let showSidebar = () => {
    setShowSideBar(!showsidebar);
  };
  
  return (
    <>
      <div className="flex flex-row bg-cloud bg-fixed h-screen ">
        {showsidebar && <Sidebar showsidebar={showSidebar} />}
        <div className='w-full h-screen overflow-y-scroll'>
          <Navbar showsidebar={showSidebar} isSidebarVisible={!showsidebar}/>
            {children}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;