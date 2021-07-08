/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const Details = React.lazy(() => import('./Details'));
const Home = React.lazy(() => import('./Home'));
const Navbar = React.lazy(() => import('./Navbar'));


function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <Switch>
          <Route path="/course-app/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
