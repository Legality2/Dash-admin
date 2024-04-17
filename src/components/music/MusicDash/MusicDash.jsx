import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './MusicDash.styles';

class MusicDash extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('MusicDash will mount');
  }

  componentDidMount = () => {
    console.log('MusicDash mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('MusicDash will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MusicDash will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('MusicDash did update');
  }

  componentWillUnmount = () => {
    console.log('MusicDash will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MusicDashWrapper">
                  <div className="container-fluid">
                    <h3 className="text-dark mb-1">Music</h3>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-lg-5 col-xl-3 col-xxl-2">
                                            <div className="card" style={{width: "100%", height: "112px"}}><img className="card-img w-100 d-block" src="assets/img/avatars/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg" width="90px" height="80px" loading="lazy" style={{height: "112px"}} />
                                                <div className="card-img-overlay">
                                                    <h4 style={{color: "var(--bs-yellow)", fontSize: "15px", background: "#000106"}}>Song Name</h4>
                                                    <p style={{color: "var(--bs-yellow)", marginTop: "-5px"}}>Artist</p>
                                                    <p style={{marginTop: "-20px", color: "var(--bs-yellow)"}}>Ft:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-xl-3 col-xxl-2">
                                            <div className="card" style={{width: "100%", height: "112px"}}><img className="card-img w-100 d-block" src="assets/img/avatars/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg" width="90px" height="80px" loading="lazy" style={{height: "112px"}} />
                                                <div className="card-img-overlay">
                                                    <h4 style={{color: "var(--bs-yellow)", fontSize: "15px", background: "#000106"}}>Song Name</h4>
                                                    <p style={{color: "var(--bs-yellow)", marginTop: "-5px"}}>Artist</p>
                                                    <p style={{marginTop: "-20px", color: "var(--bs-yellow)"}}>Ft:</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-xl-3 col-xxl-2">
                                            <div className="card" style={{width: "100%", height: "112px"}}><img className="card-img w-100 d-block" src="assets/img/avatars/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg" width="90px" height="80px" loading="lazy" style={{height: "112px"}} />
                                                <div className="card-img-overlay">
                                                    <h4 style={{color: "var(--bs-yellow)", fontSize: "15px", background: "#000106"}}>Song Name</h4>
                                                    <p style={{color: "var(--bs-yellow)", marginTop: "-5px"}}>Artist</p>
                                                    <p style={{marginTop: "-20px", color: "var(--bs-yellow)"}}>Ft:</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-xl-3 col-xxl-2">
                                            <div className="card" style={{width: "100%", height: "112px"}}><img className="card-img w-100 d-block" src="assets/img/avatars/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg" width="90px" height="80px" loading="lazy" style={{height: "112px"}} />
                                                <div className="card-img-overlay">
                                                    <h4 style={{color: "var(--bs-yellow)", fontSize: "15px", background: "#000106"}}>Song Name</h4>
                                                    <p style={{color: "var(--bs-yellow)", marginTop: "-5px"}}>Artist</p>
                                                    <p style={{marginTop: "-20px", color: "var(--bs-yellow)"}}>Ft:</p>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        
                                        
                                    </div>
                                    <div className="modal fade" role="dialog" tabindex="-1" id="modal-1">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header" style={{background: "var(--bs-gray-900)"}}>
                                                    <h4 className="modal-title" style={{color: "var(--bs-yellow)"}}>Taurus by Jacknson jonez</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body" style={{background: "#000000"}}>
                                                    <div className="card">
                                                        <h5 style={{color: '#000000'}}>ft jarmayne</h5>
                                                        <div className="card-body"><audio controls="">
                                                                <source type="audio/mpeg" />
                                                            </audio>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Edit</h4>
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item">
                                                                            <div className="input-group"><span className="input-group-text">Song</span><input className="form-control" type="text" placeholder="Taurus" /></div>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <div className="input-group"><span className="input-group-text">By</span><input className="form-control" type="text" placeholder="Jackson Jonez" /></div>
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <div className="input-group"><span className="input-group-text">Ft</span><input className="form-control" type="text" placeholder="Jermayne" /></div>
                                                                        </li>
                                                                        <li className="list-group-item"><span>UploadedOn:</span></li>
                                                                        <li className="list-group-item"><span>LastUpdated:</span></li>
                                                                        <li className="list-group-item"><span>owner:</span></li>
                                                                        <li className="list-group-item">
                                                                          <button className="btn btn-warning" type="button" style={{float: "right"}}>Update</button></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" style={{background: "var(--bs-gray-dark)"}}></div>
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

MusicDash.propTypes = {
  // bla: PropTypes.string,
};

MusicDash.defaultProps = {
  // bla: 'test',
};

export default MusicDash;
