import React, { Component } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./Filter.css";

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min: this.props.range.min,
			max: this.props.range.max,
			value: [],
		};
	}

	onRangeChange = (e) => {
		this.setState({ value: e });
	};

	onClickApply = (val) => {
		this.props.onChangeFilter(this.state.value);
	};

	onCancel = () => {
		this.props.onChangeFilter([this.props.range.min, this.props.range.max]);
	};

	render() {
		let buttons = (
			<div className="Sort-Button">
				<button onClick={this.onCancel}>Cancel</button>
				<button onClick={this.onClickApply}>Apply</button>
			</div>
		);

		if (!this.props.ismobile) {
			buttons = (
				<button className="Button" onClick={this.onClickApply}>
					Apply
				</button>
			);
		}

		return (
			<div className="Filter">
				<div className="Filter-Title">Filters Options</div>
				<div className="Filter-Range">
					<span className="Filter-Min">₹{this.state.min}</span>
					<span className="Filter-Max">₹{this.state.max}</span>
				</div>
				<div className="Filter-Range">
					<Range
						min={this.state.min}
						max={this.state.max}
						defaultValue={[this.props.range.min, this.props.range.max]}
						onChange={this.onRangeChange}
					/>
				</div>
				{buttons}
			</div>
		);
	}
}

export default Filter;
