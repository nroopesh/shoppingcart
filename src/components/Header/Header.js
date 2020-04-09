import React from "react";

import Logo from "../Header/Logo/Logo";
import Search from "../Header/Search/Search";
import Cart from "../Header/Cart/Cart";
import "./Header.css";

const Header = () => (
	<div className="Header">
		<Logo></Logo>
		<Search></Search>
		<Cart></Cart>
	</div>
);

export default Header;
