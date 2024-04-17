import React, { PureComponent } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserCog } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../../DropDown/DropDown';
import PropTypes from 'prop-types';
import UserModal from '../UserModal/UserModal';
//import { Test } from './TableUser.styles';

class TableUser extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      modal: false,
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.handleNewUserClick = this.handleNewUserClick.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({ modal: false });
  }

  handleNewUserClick() {
    this.modalOpen();
  }

  getUsers() {
    axios.get("http://192.168.5.152:4000/api/users")
    .then(res => {
      const users = res.data;
      console.log(res.data);
      
      this.setState({
        users: users
      });
    });
  }

  deleteUser(id) {
    axios.delete('192.168.5.152:4000/api/user:id', {params: {id: id}}).then(res => {
      console.log(res.data);
      alert(res.data.msg);
      //users update
      this.props.history.push("/dash/team");
      
    });
  }

  componentWillMount = () => {
    console.log('TableUser will mount');
    this.getUsers();
  }

  componentDidMount = () => {
    console.log('TableUser mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TableUser will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TableUser will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TableUser did update');
  }

  componentWillUnmount = () => {
    console.log('TableUser will unmount');
  }

  render () {

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TableUserWrapper">
        <div className="UserTableWrapper">
   <div className="container-fluid">
                    <h3 className="text-dark mb-4">Team</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                          <div className="row">
                          <div className="col-md-10">
                          <p className="text-primary m-0 font-weight-bold">Team Info</p>
                          </div>
                          
                          </div>
                            
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                          <a className="text-primary m-0 font-weight-bold" style={{float: 'right'}} onClick={this.handleNewUserClick}>New User</a>
                          <UserModal isOpen={this.state.modal} editUser={false} user={this.state} modalClose={this.modalClose} />
                          </div>
                                <div className="col-md-2">
                                    <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.users.map(function(user, index){
                                    return (
                                    <tr key={index}>
                                    <td><img className="rounded-circle mr-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg" />{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>Tokyo</td>
                                    <td>33</td>
                                    <td>2008/11/28</td>
                                    <td>
                                      <DropDown userId={user._id}>
                                      
                                      </DropDown>
                                    
                                   </td>
                                </tr>
                                    )
       })
      }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Position</strong></td>
                                            <td><strong>Office</strong></td>
                                            <td><strong>Age</strong></td>
                                            <td><strong>Start date</strong></td>
                                            <td><strong>Options</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                </div>
                                <div className="col-md-6">
                                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
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

TableUser.propTypes = {
  // bla: PropTypes.string,
};

TableUser.defaultProps = {
  // bla: 'test',
};

export default TableUser;
