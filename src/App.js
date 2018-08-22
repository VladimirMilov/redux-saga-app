import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {simpleAction} from './actions/index';
import Contacts from './views/Contacts/Contacts';
import Home from './views/Home/Home';
import Header from './views/Header/Header';
import Requests from './views/Requests/Requests';
import Animations from './views/Animations/Animations';
import NotFound from './views/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import { Button } from 'antd';
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
} from "react-router-redux";

const history = createHistory();

const routes = [
  {
    path: ROUTES.REQUESTS,
    component: Requests,
  },
  {
    path: ROUTES.ANIMATIONS,
    component: Animations,
  },
  {
    path: ROUTES.CONTACTS,
    component: Contacts,
  },
];

const App = ({ firstReducer, simpleAction }) => {
  const onSimpleAction = () => {
    console.log('button was clicked!')
    simpleAction();
   }
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Header />
        <pre>
          {
            JSON.stringify(firstReducer)
          }
        </pre>
        <Button type="primary" onClick={onSimpleAction}>Special button</Button>
        <Switch>
          <Route exact path={ROUTES.INITIAL} component={Home} />
          {routes.map(route => <Route path={route.path} component={route.component} key={route.path} /> )}
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });


export default connect(mapStateToProps, mapDispatchToProps)(App);
