import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import axios from "axios";

import Spinner from "../Spinner/Spinner";
import * as actionTypes from "../../store/actions";
import Product from "./Product/Product";
import Sort from "../../components/Sort/Sort";
import "./ProductsList.css";
import { data } from "../../data/data";

class ProductsList extends Component {
	componentDidMount() {
		///axios.get("https://api.myjson.com/bins/qzuzi").then(res => {
		axios
			.get("https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d")
			.then((res) => {
				this.loadProduct(res);
			})
			.catch((err) => {
				//alert(err.message);
				this.loadProduct({ data });
			});
	}

	loadProduct(res) {
		let prd = res.data.items.map((each, index) => {
			return {
				id: index + 1,
				name: each.name,
				price: each.price.display,
				discount: each.discount,
				img_url: "https://picsum.photos/id/" + (index + 1) + "/200",
			};
		});
		this.props.onLoadProduct(prd);
	}

	addtoCart = (id) => {
		this.props.onAddToCart(id);
	};

	render() {
		let product = <Spinner></Spinner>;

		if (this.props.products != null) {
			let products = this.props.products;

			//Applying Search
			products = products.filter((each) =>
				each.name.includes(this.props.search),
			);

			//Applying Sorting
			if (this.props.sort === 1) {
				products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
			}
			if (this.props.sort === 2) {
				products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
			}
			if (this.props.sort === 3) {
				products.sort(
					(a, b) => parseFloat(b.discount) - parseFloat(a.discount),
				);
			}

			//Applying Filters
			if (this.props.filter.length > 0) {
				products = products.filter(
					(each) =>
						each.price >= this.props.filter[0] &&
						each.price <= this.props.filter[1],
				);
			}

			product = products.map((each) => {
				return (
					<Product
						key={each.id}
						details={each}
						onCartClick={() => this.addtoCart(each.id)}
					></Product>
				);
			});
		}
		//product = <Spinner></Spinner>;
		return (
			<div>
				<MediaQuery minDeviceWidth={776}>
					<Sort
						ismobile={false}
						onSortHandler={(sort) => this.props.onSortChange(sort)}
					></Sort>
				</MediaQuery>
				<div className="ProductsList">{product}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
		cart: state.cart,
		filter: state.filter,
		sort: state.sort,
		search: state.search,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadProduct: (data) =>
			dispatch({ type: actionTypes.FETCH_PRODUCT, products: data }),
		onAddToCart: (id) => dispatch({ type: actionTypes.ADD_CART, id: id }),
		onSortChange: (e) => dispatch({ type: actionTypes.SORT, sort: e }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
