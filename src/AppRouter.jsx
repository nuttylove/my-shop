import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Router from './Router';

const Component = path => lazy(() => import(path)); 

export const AppRouter = ({ children }) => (
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      {children}
      <Switch>
        {Router.map((f, idx) => <Route key={`route-${idx}`} {...f} component={Component(f?.component)} />)}
      </Switch>
    </BrowserRouter>
  </Suspense>
);