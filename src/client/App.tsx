import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils/styles/global-style';
import { theme } from './utils/styles/theme';
import Home from './views/Home';

const App = () => {
	return (
		<ThemeProvider theme={theme} >
			<>
				<BrowserRouter>
					<GlobalStyles />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</ThemeProvider>
	)
};

interface AppProps {}

export default App;
