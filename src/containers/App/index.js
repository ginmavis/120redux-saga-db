import React, { Component } from "react";

import style from "./style";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import TaskBoard from "./../Taskboard/index";
import theme from "../../commons/Theme/index";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";

const store = configureStore();

class App extends Component {
	render() {
		// console.log(this.props);
		// const { classes } = this.props;
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<TaskBoard />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default withStyles(style)(App);