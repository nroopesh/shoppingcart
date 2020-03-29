import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Logo.css";

const Logo = props => {
	return (
		<div className="Logo ">
			<NavLink to="/" exact className="Logo-Link">
				<FontAwesomeIcon icon={faStar} />
			</NavLink>
		</div>
	);
};

export default Logo;
