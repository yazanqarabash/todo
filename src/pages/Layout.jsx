import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout({ handleDrawerToggle }) {
  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </>
  );
}

export default Layout;
