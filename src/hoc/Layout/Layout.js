import React, { Component } from "react";

import Header from "../../components/Header/Header";
import "./Layout.css";

class Layout extends Component {
	render() {
		return (
			<div className="Layout">
				<Header></Header>
				{this.props.children}
				<div className="Layout-Footer">Copyright</div>
			</div>
		);
	}
}

export default Layout;
