import React from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const PmsPage = () =>(
  <div>This is the PMS page</div>
)

function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/pms' component={PmsPage} />
    </Switch>
     
    </div>
  );
}

export default App;
