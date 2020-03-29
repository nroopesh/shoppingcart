import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

const Cart = props => {
	return (
		<div className="Cart ">
			<NavLink to="/checkout" exact className="Cart-Link">
				<FontAwesomeIcon icon={faShoppingCart} />
				{props.cart.length > 0 ? (
					<span className="Cart-Badge">{props.cart.length}</span>
				) : null}
			</NavLink>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(Cart);
