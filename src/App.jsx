import React from 'react';
import AppRouter from './AppRouter';
import NavBarApp from './components/NavBarApp';

const App = () => {
	return (
		<AppRouter>
      <NavBarApp />
		</AppRouter>
	);
};

export default App;
