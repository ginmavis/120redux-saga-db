import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./../reducers";

// kiểm tra biến môi trường không phải lài production(môi trường dev(dev tool))
// môi trường dev mới xài devtool
// chứ lên production , môi trường host thì không cần  devtool làm gì
const composeEnhancers =
	process.env.NODE_ENV !== "production" &&
	typeof window === "object" &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				shouldHotReload: false,
		  })
		: compose;

const configureStore = () => {
	const middlewares = [
		//list middleware
	];

	// cũng là 1 array sẽ apply các middleware
	const enhancers = [
		// truyền danh sách các middleware (dùng es6)
		applyMiddleware(...middlewares),
	];

	const store = createStore(rootReducer, composeEnhancers(...enhancers));
	return store;
};
export default configureStore;
