import React from "react";

import "./Product.css";
const Product = (props) => {
	let discountPrice =
		props.details.price - props.details.price * (props.details.discount / 100);
	return (
		<div className="Product">
			<img
				src={props.details.img_url}
				alt={props.details.name}
				className="Product-Img"
			/>
			<div className="Product-Title">{props.details.name}</div>

			<div className="Product-Price">
				<span className="Price-Discounted">₹ {discountPrice.toFixed(2)}</span>
				<span className="Price-Real">{props.details.price.toFixed(2)}</span>
				<span className="Price-Discount">{props.details.discount}% off</span>
			</div>

			<button className="Product-button" onClick={props.onCartClick}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
