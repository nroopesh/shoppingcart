import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../src/hoc/Layout/Layout";
import Products from "../src/container/Products/Products";
import Checkout from "../src/container/Checkout/Checkout";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Switch>
						<Route path="/" exact component={Products} />
						<Route path="/checkout" exact component={Checkout} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
