import React, { Component } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./Filter.css";

class Filter extends Component {
	state = {
		value: [100, 1000],
	};

	onChange = (e) => {
		this.setState({ value: e });
	};

	onClickApply = (val) => {
		this.props.onChangeFilter(this.state.value);
	};

	onCancel = () => {
		this.props.onChangeFilter(100, 1000);
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
					<span className="Filter-Min">₹{this.state.value[0]}</span>
					<span className="Filter-Max">₹{this.state.value[1]}</span>
				</div>
				<div className="Filter-Range">
					<Range
						min={100}
						max={1000}
						defaultValue={this.state.value}
						onChange={this.onChange}
						tipFormatter={(value) => `Roopesh`}
					/>
				</div>
				{buttons}
			</div>
		);
	}
}

export default Filter;
