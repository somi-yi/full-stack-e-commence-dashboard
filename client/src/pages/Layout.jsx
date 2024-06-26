import { Box, useMediaQuery } from "@mui/material";
import { useGetUserQuery } from "reduxToolkit/api";
import { Sidebar, Navbar } from "components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId); // ✅ REST API Call By RTK Query
 
  return (
    <Box
      //width="100%"
      //height="100%"
      display={isNonMobile ? "flex" : "block"}
    >

      {/* 🟡🟡🟡 Left Side 🟡🟡🟡  */}
      {/* 🟠🟠🟠 SideBar Component 🟠🟠🟠 */}
      <Sidebar
        user={data || {}} // this approach is prevent our app from being broken...
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* 🟡🟡🟡 Right Side 🟡🟡🟡  */}
      <Box flexGrow={1}>

        {/* 🟠🟠🟠 Top-NavBar Component 🟠🟠🟠 */}
        <Navbar
          user={data || {}} // this approach is prevent our app from being broken...
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* 🟠🟠🟠 All Child Component's 🟠🟠🟠 */}
        <Outlet />

      </Box>

    </Box>
  );
};

export default Layout;