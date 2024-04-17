import React, { Component } from 'react';
import '../../../../../assets/css/untitled.css';
import { Link } from 'react-router-dom';
//import { Test } from './Sidebar.styles';

class Sidebar extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      sideClass: "navbar navbar-dark align-items-start sidebar sidebar-dark accordion p-0 "
    };
  
    
   
  }

  
  
  

  componentWillMount = () => {
    console.log('Sidebar will mount');
  }

  render () {
    const sideStyle = "navbar align-items-start sidebar sidebar-dark accordion p-0 ";
    const tClass = this.props.close ? 'showSide' : 'hideSide'
    var menu = sideStyle + tClass;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
     
         // eslint-disable-next-line no-template-curly-in-string
         <nav className={menu} id="sidebar" style={{backgroundColor: "rgb(246 194 62)"}} >
            <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#" >
                    <div className="sidebar-brand-icon rotate-n-15">
                      
                        </div>
                    <div className="sidebar-brand-text mx-3" >
                      <span style={{color: "black"}}>NS Admin<br></br>Enhancement</span>
                      </div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                  
                    <Link to="/dash/schedule"><li className="nav-item"><a className="nav-link"><i className="fas fa-user-circle"></i><span style={{color: "black", fontWeight: "bold"}}>Schedule</span></a></li></Link>
                    <Link to="/dash/team"><li className="nav-item"><a className="nav-link"><i className="fas fa-user-circle"></i><span style={{color: "black", fontWeight: "bold"}}>Team</span></a></li></Link>
                    <Link to="/dash/user/profile"><li className="nav-item"><a className="nav-link"><i className="fas fa-user-circle"></i><span style={{color: "black", fontWeight: "bold"}}>Profile</span></a></li></Link>
                    <Link to="/dash/products"><li className="nav-item"><a className="nav-link"><i className="fas fa-user-circle"></i><span style={{color: "black", fontWeight: "bold"}}>Products</span></a></li></Link>
                    <Link to="/dash/music"><li className="nav-item"><a className="nav-link"><i className="fas fa-user-circle"></i><span style={{color: "black", fontWeight: "bold"}}>Music</span></a></li></Link>
                </ul>
                <div className="text-center d-md-inline">
                  <button className="btn rounded-circle border-0" id="sidebarToggle"  type="button" onClick={ this.props.handleToggle }></button>
                  </div>
            </div>
        </nav>
     
    );
  }
}


export default Sidebar;
