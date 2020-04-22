import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider } from './State';
import { TopBar } from '../navigation/TopBar';
import LandingPage from '../landing/Landing';
import HomePage from '../home/Home';
import AdminPage from '../admin/Admin';
import * as ROUTES from '../../constants/routes';

export default function App() {
  return (
    <StateProvider>
      <Router>
        <TopBar display='Home'/>

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </StateProvider>
  );
}
