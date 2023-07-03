import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

export const Root = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};
