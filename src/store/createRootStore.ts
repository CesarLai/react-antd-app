import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Middleware,
  ReducersMapObject,
  StoreEnhancer,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

import { localeReducer } from "./global/reducers";
import { RootReducerState } from "./types";

const isProd = process.env.NODE_ENV === "production";

const createRootReducer = () =>
  combineReducers<ReducersMapObject<RootReducerState, any>>({
    locale: localeReducer,
  });

/**
 * Persist reducer whilelist.
 */
export const persistentStoreWhitelist = [];

const persistConfig: PersistConfig<any> = {
  key: "react-antd-app",
  storage,
  whitelist: persistentStoreWhitelist,
  version: 1,
};

const getBaseMiddlewares = (): Middleware[] => {
  const middlewares = [thunk, logger];
  isProd && middlewares.pop();

  return middlewares;
};

const applyMiddlewares = (middlewares: Middleware[]) =>
  applyMiddleware(...middlewares);

const getProdMiddlewares = () => {
  const middlewares = [
    composeWithDevTools,
    applyMiddlewares,
    getBaseMiddlewares,
  ];
  isProd && middlewares.shift();
  return middlewares;
};

const enhancer = compose<StoreEnhancer>(...getProdMiddlewares());

const createRootStore = (initialState?: RootReducerState) => {
  const rootReducer = createRootReducer();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, initialState, enhancer());
  const persistor = persistStore(store);

  return { store, persistor };
};

export default createRootStore;
