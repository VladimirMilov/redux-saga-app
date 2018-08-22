import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import createHistory from "history/createBrowserHistory";

import { routerMiddleware } from "react-router-redux";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
