import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from './State';
import { TopBar } from '../navigation/TopBar';
import * as ROUTES from '../../constants/routes';
import LandingPage from '../landing/Landing';
import HomePage from '../home/Home';
import AdminPage from '../admin/Admin';
import Reader from '../reader/Reader';

export default function App() {
  return (
    <StateProvider>
      <Router>
        <TopBar display='Home'/>

        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.READER} component={Reader} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
      </Router>
    </StateProvider>
  );
}
