import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils/styles/global-style';
import { theme } from './utils/styles/theme';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';


const App = () => {

	return (
		<ThemeProvider theme={theme} >
			<>
				<BrowserRouter>
					<GlobalStyles />
					<Back>
						<div className="back-image">

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
						</div>
					</Back>
				</BrowserRouter>
			</>
		</ThemeProvider>
	)
};

const Back = styled.div`
.back-image {
	content: "";
	background-color: #ffffff;
	background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23ff5c5c' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ffbd4a' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23ee825e' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e5bb84' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23dca060' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c8b8ab' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c8b861' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23a5b6cb' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b2ce63' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%237ab3e6' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2399e265' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%232fb1ff' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
}

body {
	position: relative;
	color: #ffffff;  
	font-size: 14rem;
	line-height: 0.9;
	text-align: center;

}
`

interface AppProps { }

export default App;
