import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleFill, RiShoppingCartFill } from "react-icons/ri";

const options = {
  burgerColor: "tomato",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "10vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon: true,
  ProfileIconElement: RiAccountCircleFill,
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  profileIconMargin: 10,
  searchIcon: true,
  SearchIconElement: FaSearch,
  searchIconMargin: 10,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIcon: true,
  CartIconElement: RiShoppingCartFill,
  cartIconUrl: "/cart",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
