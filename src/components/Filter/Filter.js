import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./Filter.css";

const Filter = props => {
	return (
		<div className="Filter">
			<div className="Filter-Title">Filters Options</div>
			<div className="Filter-Range">
				<span className="Filter-Min">₹100</span>
				<span className="Filter-Max">₹1000</span>
			</div>
			<div className="Filter-Range">
				<Range
					min={100}
					max={1000}
					defaultValue={[100, 1000]}
					onChange={props.onChangeFilter}
				/>
			</div>
		</div>
	);
};

export default Filter;
