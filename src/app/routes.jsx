import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from 'components/app';
import auth from 'components/authenticated';
// account
import Authentication from 'components/auth';
import Account from 'components/account';
import AccountDashboard from 'components/account/dashboard';
// homepage
import Home from 'components/home';

export const router = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/auth" component={Authentication} />
      <Route path="account" component={auth(Account)}>
        <IndexRoute component={auth(AccountDashboard)} />
      </Route>
    </Route>
  )
}

export default router;
