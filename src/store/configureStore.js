import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadState) {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const storeEnhancers = [middlewareEnhancer];
	const composedEnhancer = compose(...storeEnhancers);

	const store = createStore(
		rootReducer,
		preloadState,
		composedEnhancer
	);

	return store;
}