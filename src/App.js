import React from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SigninSignout from './pages/sign-signout/sign-signup'; 




function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={ShopPage} />
    <Route exact path='/signin' component={SigninSignout} />
    </Switch>
     
    </div>
  );
}

export default App;
