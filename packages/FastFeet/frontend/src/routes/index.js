import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SingIn from '~/pages/SingIn';
import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/Problems" component={Problems} isPrivate />
      <Route path="/" exact component={SingIn} />
    </Switch>
  );
}
