// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// import { createStore, applyMiddleware, compose } from 'redux';
// import createDebounce from 'redux-debounced';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const middlewares = [thunk, createDebounce()];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));
// const persistor = persistStore(store);

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