// eslint-disable-next-line
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/index';
import history from './history';
import Routes from './Routes';

const lazyComponent = path => lazy(() => import(`${path}`));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const AppRouter = ({ children }) => {
  const [mapRoute, setRoute] = useState([]);

  useEffect(() => {
    setRoute(Routes);
    return () => setRoute([]);
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <Router history={history}>
            {children}
            <Switch>
              {mapRoute.map(({ pathCP, ...f }, idx) => <Route key={idx} {...f} component={lazyComponent(pathCP)} />)}
            </Switch>
          </Router>
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
};

export default connect()(AppRouter);