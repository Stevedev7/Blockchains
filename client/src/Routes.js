import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/details" exact component={Details} />
				<Route path="/details/:restaurantId" exact component={Details} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
