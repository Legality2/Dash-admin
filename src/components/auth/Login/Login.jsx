import React, { PureComponent } from 'react';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import PropTypes from 'prop-types';
//import { Test } from './Login.styles';
import authService from '../../../services/auth.service';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      message: "",
      loading: false,
        username: '',
        password: ''
      
    };

    this.input = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
  }


  setUsername = (u) => {
    this.setState({
        username: u
    })
  }
  setPassword = (u) => {
    this.setState({
        password: u
    })
  }

   onChangeUsername = (e) => {
    const username = e.target.value;
    
    this.setUsername(username);
  }

   onChangePassword = (e) => {
    const password = e.target.value;
    
    this.setPassword(password);
  }

  handleLogin(e) {
    e.preventDefault();

    var test = {
      username: this.inputUsername.value,
      password: this.inputPassword.value,
    }
    
    console.log(test.username);
     axios
    .post("http://192.168.5.152:4000/api/auth/login", {
      username: test.username,
      password: test.password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
        alert("loggin user in ...");
        this.props.history.push("/dash/schedule");
      } else {
        alert(response.data.msg);
      }
    });

  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoginWrapper" style={{background: '#0c3026', minHeight: '1000px'}}>
               <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-login-image" style={{backgroundImage: "url(/assets/img/yellowstone.png)"}}></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                                    </div>
                                    <form className="user" onSubmit={this.handleLogin}>
                                        <div className="form-group"><input className="form-control form-control-user" type="username" id="exampleInputUsername" aria-describedby="userHelp" placeholder="Enter Username..." name="username"  ref={(input) => this.inputUsername = input }
                /></div>
                                        <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password"  ref={(input) => this.inputPassword = input } name="password" 
               /></div>
                                        <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
                
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
                                    </form>
                                    <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                                    <div className="text-center"></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
