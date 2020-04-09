import React from "react";
import "./Details.css";

const Details = (props) => {
	let discountPrice =
		props.prd.price - props.prd.price * (props.prd.discount / 100);
	return (
		<div className="Details">
			<img
				src={props.prd.img_url}
				alt={props.prd.name}
				className="Details-Img"
			/>
			<div className="Details-Title">{props.prd.name}</div>

			<div className="Details-Price">
				<span className="Details-Discounted">₹ {discountPrice.toFixed(2)}</span>
				<span className="Details-Real">{props.prd.price.toFixed(2)}</span>
				<span className="Details-Discount">{props.prd.discount}% off</span>
			</div>

			<div className="Details-Buttons">
				<button onClick={props.onReduce}>-</button>
				{props.qty}
				<button onClick={props.onAdd}>+</button>
			</div>

			<button className="Details-Remove" onClick={props.onRemove}>
				REMOVE
			</button>
		</div>
	);
};

export default Details;
