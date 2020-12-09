import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import QueryStringCatcher from "./containers/QueryStringCatcher";
import BodyContainer from "./containers/BodyContainer";
import SideBar from "./containers/SideBar";
import MainLayout from "./layouts/MainLayout";

export default function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<GlobalStyle />
				<QueryStringCatcher />
				<MainLayout >
					<SideBar />
					<BodyContainer />
				</MainLayout>
			</Route>
		</BrowserRouter>
	);
}
