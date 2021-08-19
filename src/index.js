import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import YourPlans from './components/YourPlans/YourPlans';
import Footer from './components/Footer/Footer';
import Campaign from './components/Campaign/Campaign';
import Report from './components/Report/Report';
import Invoices from './components/Invoices/Invoices'
import MyAccount from './components/MyAccount/MyAccount';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Header className="App-header"/>
    <Switch>
        <Route exact path="/" component={Campaign} />
        <Route exact path="/Campaign" component={Campaign} />
        <Route path="/YourPlans" component={YourPlans} />
        <Route path="/Reports" component={Report} />
        <Route path="/Invoice" component={Invoices} />
        <Route path="/MyAccount" component={MyAccount} />
      </Switch>
      <Footer/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
