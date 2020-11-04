import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './utils/styles/global-style';
import Home from './views/Home';

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;
