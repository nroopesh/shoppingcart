import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Cart.css";

const Cart = (props) => {
	let productCount = props.cart.reduce((total, each) => total + each.qty, 0);

	return (
		<div className="Cart ">
			<NavLink to="/checkout" exact className="Cart-Link">
				<FontAwesomeIcon icon={faShoppingCart} />
				{productCount > 0 ? (
					<span className="Cart-Badge">{productCount}</span>
				) : null}
			</NavLink>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps)(Cart);
