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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...arrMiddleware)));

export default store;