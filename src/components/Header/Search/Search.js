import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import * as actionTypes from "../../../store/actions";
import "./Search.css";

class Search extends Component {
	state = {
		content: "",
		show: false,
	};

	toggleBox = () => {
		let show = this.state.show;
		if (!show) {
			this.setState({ show: true });
		}
	};

	onChangeHandler = e => {
		this.props.onSearchChange(e.target.value);
	};

	render() {
		let textBox = "";
		if (this.state.show) {
			textBox = (
				<input
					type="text"
					className="Search-Textbox"
					placeholder="Search"
					onChange={this.onChangeHandler}
				/>
			);
		}
		return (
			<div className="Search">
				{textBox}
				<FontAwesomeIcon icon={faSearch} onClick={this.toggleBox} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: e => dispatch({ type: actionTypes.SEARCH, search: e }),
	};
};

export default connect(null, mapDispatchToProps)(Search);
