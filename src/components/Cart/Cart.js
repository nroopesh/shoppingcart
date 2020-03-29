import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";
import Details from "./Details/Details";
import Summary from "./Summary/Summary";
import "./Cart.css";

class Cart extends Component {
	render() {
		let cart = (
			<div style={{ width: "100%", textAlign: "center", paddingTop: "100px" }}>
				Please start the shopping
			</div>
		);
		let summary = null;
		let totalQty = 0;
		let totalPrice = 0;
		let totalDiscount = 0;
		if (this.props.cart.length > 0) {
			cart = this.props.cart.map(each => {
				let prd = this.props.products.find(prd => each.id === prd.id);

				totalQty += each.qty;
				totalPrice += prd.price * each.qty;

				totalDiscount += ((prd.price * prd.discount) / 100) * each.qty;

				return (
					<Details
						className="Cart-Details"
						key={each.id}
						qty={each.qty}
						prd={prd}
						onAdd={() => this.props.onIncrement(each.id)}
						onReduce={() => this.props.onDecrement(each.id)}
						onRemove={() => this.props.onRemove(each.id)}
					></Details>
				);
			});

			cart = <div className="Cart-Product">{cart}</div>;

			summary = (
				<Summary
					qty={totalQty}
					price={totalPrice}
					discount={totalDiscount}
				></Summary>
			);
		}

		return (
			<div className="Cartcontent">
				{cart}
				{summary}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products,
		cart: state.cart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrement: id => dispatch({ type: actionTypes.ADD_CART, id: id }),
		onDecrement: id => dispatch({ type: actionTypes.SUBTRACT_CART, id: id }),
		onRemove: id => dispatch({ type: actionTypes.REMOVE_CART, id: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
