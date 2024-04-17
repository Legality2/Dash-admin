import Dash from "../dashboard/Dash/Dash";
import Login from "../auth/Login/Login";
import Schedule from "../calender/Schedule/Schedule";
import AuthService from "../.././services/auth.service";
import React, { Component } from "react";
import '../../assets/js/theme.js';
import { BrowserRouter, Route, Switch, useHistory, Redirect, Link } from 'react-router-dom';
import jwt from 'jwt-decode';
import DashContent from "../dashboardContent/DashContent/DashContent";
import ProtectedRoute from '../PrivateRoute/PrivateRoute';

class About extends Component {
  render() {
    return <h1>this about me</h1>
  }
}
class Admin extends Component {
  render() {
    return <h1>this is admin view</h1>
  }
}




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);


    this.state = {
      currentUser: undefined,
      isLoggedIn: false
    };
  }

  logOut() {
    AuthService.logout();
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        isLoggedIn: true
      });
    }
  }


  render() {
   
    
    if(!this.state.currentUser){
      return (
        <div className="App">
        
        <BrowserRouter>
         <Switch>
        <Redirect exact from='/' to='/login' />
              <Route exact path={["/", "/login"]} component={Login} />  
              <ProtectedRoute  path="/dash" component={Dash} />
              
            
         </Switch>
         </BrowserRouter>
       </div>
      );
    } else {
      return (

        <div className="App">
        
        <BrowserRouter>
         <Switch>
              <ProtectedRoute  path="/dash" component={Dash} />
               <Route  path="/login"  component={Login} />
               
             
         </Switch>
         </BrowserRouter>
       </div>
      );
    }
    
  }
}




export default App;
