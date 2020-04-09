import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons";

import * as actionTypes from "../../store/actions";
import Modal from "../../components/Modal/Modal";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import Sort from "../../components/Sort/Sort";

import "./Products.css";

class Products extends Component {
	state = {
		filtermodal: false,
		sortmodal: false,
		products: null,
	};

	closeModalHandler = () => {
		this.setState({ filtermodal: false, sortmodal: false });
	};

	openSort = () => {
		this.setState({ sortmodal: true, filtermodal: false });
	};

	openFilter = () => {
		this.setState({ sortmodal: false, filtermodal: true });
	};

	filterUpdate = (e) => {
		this.props.onFilterChange(e);
		this.closeModalHandler();
	};

	sortUpdate = (e) => {
		e > 0 && this.props.onSortChange(e);
		this.closeModalHandler();
	};

	render() {
		return (
			<div className="Products">
				<MediaQuery minDeviceWidth={776}>
					<Filter onChangeFilter={this.filterUpdate} ismobile={false}></Filter>
				</MediaQuery>

				<MediaQuery maxDeviceWidth={776}>
					<div className="Products-Option">
						<button className="Products-Button" onClick={this.openSort}>
							<FontAwesomeIcon icon={faSort} />
							SORT
						</button>
						<button className="Products-Button" onClick={this.openFilter}>
							<FontAwesomeIcon icon={faFilter} />
							FILTER
						</button>
					</div>

					<Modal
						show={this.state.filtermodal}
						modalDismiss={this.closeModalHandler}
						key={1}
					>
						<Filter onChangeFilter={this.filterUpdate} ismobile={true}></Filter>
					</Modal>

					<Modal
						show={this.state.sortmodal}
						modalDismiss={this.closeModalHandler}
						key={2}
					>
						<Sort ismobile={true} onSortHandler={this.sortUpdate}></Sort>
					</Modal>
				</MediaQuery>

				<ProductsList></ProductsList>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterChange: (e) => dispatch({ type: actionTypes.FILTER, filter: e }),
		onSortChange: (e) => dispatch({ type: actionTypes.SORT, sort: e }),
	};
};

export default connect(null, mapDispatchToProps)(Products);
