import React, { PureComponent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
//import { Test } from './EditUser.styles';

class EditUser extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  updateUser(event) {
  
    event.preventDefault();
    const userId = this.props.UserData._id;
    const updates = {};
    var test = {
      username: this.inputUsername.value
    };

    console.log(updates);
     axios.put('http://192.168.5.152:4000/api/user:id', {user: test, params: {
      id: userId
    }}).then((res) => {
      alert(res.data.msg);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
 
  }

  componentWillMount = () => {
    console.log('EditUser will mount');
  }

  componentDidMount = () => {
    console.log('EditUser mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('EditUser will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('EditUser will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('EditUser did update');
  }

  componentWillUnmount = () => {
    console.log('EditUser will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="EditUserWrapper">
        <form onSubmit={this.updateUser}>
         <div className="form-group">
          <div className="input-group">
              <div className="input-group-prepend"><span className="input-group-text">Title</span></div><input className="form-control" type="text" placeholder={this.props.user.username} ref={(input) => this.inputUsername = input }/>
              <div className="input-group-append"></div>
          </div>
      </div>
      <button className="btn btn-outline-success">Update User</button>
      </form>
      </div>
    );
  }
}

EditUser.propTypes = {
  // bla: PropTypes.string,
};

EditUser.defaultProps = {
  // bla: 'test',
};

export default EditUser;
