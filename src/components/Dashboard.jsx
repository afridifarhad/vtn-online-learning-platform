import React from "react";
import Navbar from "./Navbar";

function Dashboard({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className={`${sidebarToggle ? "" : " ml-60  "} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default Dashboard;
