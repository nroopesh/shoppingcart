import React from "react";

import "./Summary.css";
const Summary = props => {
	return (
		<div className="Summary">
			<span className="Summary-Title">PRICE DETAILS</span>
			<span className="Summary-Price">
				Price ({props.qty} items):{" "}
				<span className="Summary-PriceRight">₹{props.price}</span>
			</span>
			<span className="Summary-Price">
				Discount :<span className="Summary-PriceRight">₹{props.discount}</span>
			</span>
			<span className="Summary-Footer">
				Total Payable:{" "}
				<span className="Summary-PriceRight">
					₹{props.price - props.discount}
				</span>
			</span>
		</div>
	);
};

export default Summary;
