import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from "./SignIn";
import ProductsPageContainer from "./Containers/ProductsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route exact path='/products' component={ProductsPageContainer}/>
    </Switch>
  </main>
);

export default Main;