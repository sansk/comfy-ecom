import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Wrapper as NavContainer } from "../styled-components/Navbar.styles";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import logo from "../assets/logo.svg";

const Nav = () => {
  return <h4>navbar</h4>;
};

export default Nav;
