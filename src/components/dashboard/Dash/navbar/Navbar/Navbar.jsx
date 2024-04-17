import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../../../../../assets/js/theme.js';
import AuthService from '../../../../../services/auth.service';
import PropTypes from 'prop-types';
import authService from '../../../../../services/auth.service.js';
//import { Test } from './Navbar.styles';

class Navbar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      currentUser: this.props.user,
      redirect: null
    };


    this.logout = this.logout.bind(this);
  }

  sideToggle = () => {
    this.props.hop();
  }
 
  logout = () => {
    authService.logout();
    
    this.setState({
      redirect: '/login'
    });
  }
  componentDidMount = () => {
    console.log('Navbar mounted');
    console.log(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Navbar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Navbar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Navbar did update');
  }

  componentWillUnmount = () => {
    console.log('Navbar will unmount');
  }
  

  render () {
    const { currentUser } = this.state;
    const { redirect } = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="NavbarWrapper" style={{color: 'white'}}>
       <nav className="navbar navbar-expand shadow mb-4 topbar static-top" style={{backgroundColor: "black"}}>
       <button className="btn btn-link rounded-circle mr-3" id="sidebarToggleTop" type="button" onClick={ this.sideToggle }  style={{backgroundColor: 'rgb(246 194 62)', cursor:'pointer', color: "black"}}>
                                     <FontAwesomeIcon icon={faBars}  />
                                         </button>
                                 <div className="container-fluid">
                                    
                                     <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                         <div className="input-group">
                                             <div className="input-group-append"></div>
                                         </div>
                                     </form>
                                     <ul className="nav navbar-nav flex-nowrap ml-auto">
                                         <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search"></i></a>
                                             <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                                 <form className="form-inline mr-auto navbar-search w-100">
                                                     <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                         <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                                     </div>
                                                 </form>
                                             </div>
                                         </li>
                                         <li className="nav-item dropdown no-arrow mx-1">
                                             <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="badge badge-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                                 <div className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
                                                     <h6 className="dropdown-header text-white" style={{color: 'white'}}>alerts center</h6>
                                                     <a className="d-flex align-items-center dropdown-item" href="#">
                                                         <div className="mr-3">
                                                             <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                                         </div>
                                                         <div><span className="small text-gray-500">December 12, 2019</span>
                                                             <p>A new monthly report is ready to download!</p>
                                                         </div>
                                                     </a>
                                                     <a className="d-flex align-items-center dropdown-item" href="#">
                                                         <div className="mr-3">
                                                             <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                                         </div>
                                                         <div><span className="small text-gray-500">December 7, 2019</span>
                                                             <p>$290.29 has been deposited into your account!</p>
                                                         </div>
                                                     </a>
                                                     <a className="d-flex align-items-center dropdown-item" href="#">
                                                         <div className="mr-3">
                                                             <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                                         </div>
                                                         <div><span className="small text-gray-500">December 2, 2019</span>
                                                             <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                                         </div>
                                                     </a><a className="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                                             </div>
                                         </li>
                                         <div className="d-none d-sm-block topbar-divider"></div>
                                         <li className="nav-item dropdown no-arrow">
                                             <div className="nav-item dropdown no-arrow">
                                               <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#" style={{background: "transparent"}}>
                                                 <span className="d-none d-lg-inline mr-2 text-white-600 small">{currentUser.username}</span>
                                                 <img className="border rounded-circle img-profile" src="../../../../assets/img/avatars/avatar1.jpeg" /></a>
                                             
                                                 <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"><Link to="/dash/user/profile"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a></Link><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                                     <a className="dropdown-item" href="#">
                                                         <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400">
                                                             </i>&nbsp;Activity log</a>
                                                         <div className="dropdown-divider">
                                                             </div><a className="dropdown-item" onClick={this.logout}>
                                                                 <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">
                                                                     </i>&nbsp;Logout</a></div>
                                 </div>
                                 </li>
                                 </ul>
                         </div>
                         </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
