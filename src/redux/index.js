import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const arrMiddleware = [thunk, createDebounce()];
let store;

const initStore = (initialState = {}) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...arrMiddleware)));
export const stores = createStore(rootReducer, composeWithDevTools(applyMiddleware(...arrMiddleware)));

export const initializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};