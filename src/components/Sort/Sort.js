import React, { Component } from "react";
import { connect } from "react-redux";

import "./Sort.css";

class Sort extends Component {
	state = {
		option: 0,
	};

	onClick = (val) => {
		this.setState({ option: val });
	};

	onClickApply = (val) => {
		this.props.onSortHandler(val);
	};

	onSort = () => {
		this.props.onSortHandler(this.state.option);
	};

	onCancel = () => {
		this.props.onSortHandler(0);
	};

	render() {
		let options = (
			<div className="Sort">
				<div className="Sort-Title">Sort By</div>
				<ul>
					<li key={1} className="Sort-Item">
						<input
							type="radio"
							name="options"
							value="1"
							onClick={() => this.onClick(1)}
						/>
						Price -- High Low
					</li>
					<li key={2} className="Sort-Item">
						<input
							type="radio"
							name="options"
							value="2"
							onClick={() => this.onClick(2)}
						/>
						Price -- Low High
					</li>
					<li key={3} className="Sort-Item">
						<input
							type="radio"
							name="options"
							value="3"
							onClick={() => this.onClick(3)}
						/>
						Discount
					</li>
				</ul>
				<div className="Sort-Button">
					<button onClick={this.onCancel}>Cancel</button>
					<button onClick={this.onSort}>Apply</button>
				</div>
			</div>
		);
		if (!this.props.ismobile) {
			options = (
				<div className="Sort">
					<div className="Sort-Title">Sort By</div>
					<ul>
						<li key={1} className="Sort-Item">
							<button
								className={this.props.sort === 1 ? "active" : ""}
								onClick={() => this.onClickApply(1)}
							>
								Price -- High Low
							</button>
						</li>
						<li key={2} className="Sort-Item">
							<button
								className={this.props.sort === 2 ? "active" : ""}
								onClick={() => this.onClickApply(2)}
							>
								Price -- Low High
							</button>
						</li>
						<li key={3} className="Sort-Item">
							<button
								className={this.props.sort === 3 ? "active" : ""}
								onClick={() => this.onClickApply(3)}
							>
								Discount
							</button>
						</li>
					</ul>
				</div>
			);
		}
		return options;
	}
}

const mapStateToProps = (state) => {
	return {
		sort: state.sort,
	};
};

export default connect(mapStateToProps)(Sort);
