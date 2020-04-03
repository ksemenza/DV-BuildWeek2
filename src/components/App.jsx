import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import "../css/App.css";
import PrivateRoute from "./PrivateRoute"
import ExpenseHeader from './ExpenseHeader';
import PersonalForm from '../personal/PersonalForm'
import Dashboard from '../component/Dashboard'
import MoveForm from './MoveForm'
import SignUp from './SignUp';
import Login from './Login';
import View from './GetRequest';
import axios from 'axios'


//TALLY WORKING

const App = () => {


  

  return (

    <div className="App">
   <ExpenseHeader/>


       <Switch>
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={SignUp} />
        <Route path="/personal-form" component={PersonalForm} />
        <Route path="/moving-form" component={MoveForm} />
        <Route exact path="/" component={Dashboard} />
   
      </Switch>
    </div>
  );
}

export default App;