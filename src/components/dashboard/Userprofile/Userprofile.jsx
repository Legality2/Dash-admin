
  import React, { Component } from "react";
  import authService from "../../../services/auth.service";
  import UploadModal from "../../upload/fileModal/UploadModal/UploadModal";
  export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentUser: authService.getCurrentUser(),
        modal: false
      };

      this.modalOpen = this.modalOpen.bind(this);
      this.modalClose = this.modalClose.bind(this);
    }

    modalOpen() {
        this.setState({ modal: true });
      }
    
    modalClose() {
        this.setState({
          modal: false
        });
    }
    handleChangePhoto = (arg) => {

        this.modalOpen();
         
       }

    render() {
      const { currentUser } = this.state;
      const proImg = currentUser.profileImg;
      const local = 'http://localhost:4000';
      const url = '/files/' + proImg;
      const n = local + url;
      console.log(url);
      return (
        <div>
        <div className="container-Fluid" style={{padding: "60px"}}>
        <h3 className="textDark mb-4">Profile</h3>
        <div className="row mb-3" >
            <div className="col-lg-4">
                <div className="card mb-3">
                    <div className="cardBody textCenter shadow"><img className="roundedCircle mb-3 mt-4" src={n} width="160" height="160" />
                        <UploadModal isOpen={this.state.modal} modalClose={this.modalClose} />
                        <div className="mb-3"><button className="btn btn-primary btn-sm" type="button" onClick={this.handleChangePhoto}>Change Photo</button></div>
                    </div>
                    <h2>{currentUser.username}</h2>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">Events</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Orlando Area<span className="float-right">15</span></h4>
                        <div className="progress progress-sm mb-3">
                            <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "15%"}}><span className="sr-only">15%</span></div>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="row mb-3 ">
                    <div className="col">
                        <div className="card text-white bg-primary shadow">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col">
                                        <p className="m-0"><h4>Events Created</h4>  <br /> this month</p>
                                        <p className="m-0"><strong>15</strong></p>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                </div>
                                <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;10 more since last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-success shadow">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col">
                                        <p className="m-0"><h4>Events Passed </h4></p>
                                        <p className="m-0"><strong>35</strong></p>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                </div>
                                <p className="text-black-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;20 passed since last month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow mb-3">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">User Settings</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="form-group"><label for="username"><strong>Username</strong></label><input className="form-control" type="text" placeholder={currentUser.username} name="username" /></div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group"><label for="email"><strong>Email Address</strong></label><input className="form-control" type="email" placeholder="user@example.com" name="email" /></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="form-group"><label for="first_name"><strong>First Name</strong></label><input className="form-control" type="text" placeholder="John" name="first_name" /></div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group"><label for="last_name"><strong>Last Name</strong></label><input className="form-control" type="text" placeholder="Doe" name="last_name" /></div>
                                        </div>
                                    </div>
                                    <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                                </form>
                            </div>
                        </div>
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 font-weight-bold">Contact Settings</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group"><label for="address"><strong>Address</strong></label><input className="form-control" type="text" placeholder="Sunset Blvd, 38" name="address" /></div>
                                    <div className="form-row">
                                        <div className="col">
                                            <div className="form-group"><label for="city"><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group"><label for="country"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country" /></div>
                                        </div>
                                    </div>
                                    <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card shadow mb-5">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">Forum Settings</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group"><label for="signature"><strong>Signature</strong><br /></label><textarea className="form-control" rows="4" name="signature"></textarea></div>
                            <div className="form-group">
                                <div className="custom-control custom-switch"><input className="custom-control-input" type="checkbox" id="formCheck-1" /><label className="custom-control-label" for="formCheck-1"><strong>Notify me about new replies</strong></label></div>
                            </div>
                            <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
      )
    };
  }