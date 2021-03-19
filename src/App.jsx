import React from 'react';
import AppRouter from './AppRouter';
import NavBarApp from './components/NavBarApp';
import { connect } from'react-redux';

const App = () => {
	return (
		<AppRouter>
      <NavBarApp />
		</AppRouter>
	);
};

export default connect()(App);
