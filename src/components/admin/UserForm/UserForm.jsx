import React, { PureComponent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
//import { Test } from './UserForm.styles';

class UserForm extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
    this.input = React.createRef();
    this.newUser = this.newUser.bind(this);
  }
  newUser(event) {
 
    event.preventDefault();
    var test = {
      username: this.inputUsername.value,
      role: this.inputRole.value,
      password: this.inputPassword.value
    };
    
    
    console.log(test);

    axios.post('http://localhost:4000/api/user', {
      username: test.username,
      role: test.role,
      password: test.password
    })
    .then(function (response) {
      console.log(response);
    
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
  
  }

  componentWillMount = () => {
    console.log('UserForm will mount');
  }

  componentDidMount = () => {
    console.log('UserForm mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('UserForm will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('UserForm will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('UserForm did update');
  }

  componentWillUnmount = () => {
    console.log('UserForm will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UserFormWrapper">
        <form onSubmit={this.newUser}>
         <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">UserName</span></div><input className="form-control" type="text" ref={(input) => this.inputUsername = input }/>
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Role</span></div><input className="form-control" ref={(input) => this.inputRole = input } type="text" />
              <div className="input-group-append"></div>
          </div>
      </div>
      <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Password</span></div><input className="form-control" ref={(input) => this.inputPassword = input } type="password" />
              <div className="input-group-append"></div>
          </div>
      </div>

      <button>new user</button>
      </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  // bla: PropTypes.string,
};

UserForm.defaultProps = {
  // bla: 'test',
};

export default UserForm;
