import React, { Component } from 'react';
import Navbar from "../Dash/navbar/Navbar";
import Sidebar from "../Dash/sidebar/Sidebar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProductsView from '../../products/ProductsView/ProductsView';
import PropTypes from 'prop-types';
import AuthService from '../../../services/auth.service';
import DashContent from '../../dashboardContent/DashContent/DashContent'
import Login from '../../auth/Login/Login';
import Users from '../user/Users/Users';
import UserProfile from '../Userprofile/Userprofile';
import Schedule from '../../calender/Schedule/Schedule';
import NotFound from '../../../errors/NotFound/NotFound';
import TableUser from '../../admin/TableUser/TableUser';
import MusicDash from '../../music/MusicDash/MusicDash';
//import { Test } from './Dash.styles{';

class About extends Component {
  render() {
    return <h1>this about me</h1>
  }
}
class Admin extends Component {
  render() {
    return <h1 style={{color: 'black'}}>this is admin view</h1>
  }
}



class Dash extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      currentUser: AuthService.getCurrentUser(),
      close: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = () => {
    this.setState({
      close: !this.state.close
    });
  }

  componentWillMount = () => {
    console.log('Dash will mount');
    
  }

 

  render () {

    

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      
      <div>   
        <BrowserRouter >
                 <div id="wrapper">
                     <Sidebar close={this.state.close}  handleToggle={this.handleToggle}  />
                    
                    <div className="d-flex flex-column" id="content-wrapper">
                         <div id="content">
                             <Navbar user={this.state.currentUser} hop={this.handleToggle} />
                         
                        <div style={{minHeight: '600px'}}>
                        
                
                      <Switch>        
              <Route exact path="/dash/schedule" component={Schedule} />
              <Route exact path="/dash/products" component={ProductsView} /> 
              <Route exact path="/dash/music" component={MusicDash} />
              <Route exact path="/dash/team" component={TableUser} /> 
              <Route exact path="/dash/about" component={About} /> 
              <Route exact path="/dash/user/profile" component={UserProfile} />
              <Route exact path="/login" component={Login} /> 
              <Route  path="*" component={NotFound}/>                
         </Switch>
                        </div>
                         
                     </div>
                     </div>
      </div>
      </BrowserRouter>
      </div>
  
    )
  }
}

Dash.propTypes = {
  // bla: PropTypes.string,
};

Dash.defaultProps = {
  // bla: 'test',
};

export default Dash;
