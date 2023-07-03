import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { Wrapper as SidebarContainer } from "../styled-components/Sidebar.styles";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Comfy Sloth" className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <NavLink to={url} onClick={closeSidebar}>
                  {text}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink to="/checkout" onClick={closeSidebar}>
              Checkout
            </NavLink>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
