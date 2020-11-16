import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils/styles/global-style';
import { theme } from './utils/styles/theme';
import Home from './views/Home';
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'

const Slide = require('react-reveal/Slide');

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
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/services">
							<Services />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</ThemeProvider>
	)
};

interface AppProps { }

export default App;
