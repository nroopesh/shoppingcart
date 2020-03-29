import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import productReducer from "./store/reducers/product";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(productReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename="/shoppingcart">
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
