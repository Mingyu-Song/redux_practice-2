import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension"; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools());

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodosContainer} />
          <Route exact path="/1" component={CounterContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
