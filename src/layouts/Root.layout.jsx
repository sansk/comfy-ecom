import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";
import { AuthWrapper } from "../pages";

export const Root = () => {
  return (
    <AuthWrapper>
      <main>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </main>
    </AuthWrapper>
  );
};
