import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './FileUpload.styles';

class FileUpload extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FileUploadWrapper">
        <div className="container">
          <div className="row">
              <form>
              <h3>Ns File Upload</h3>
              <div className="form-group">
                  <input type="file" />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">upload</button>
              </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

FileUpload.propTypes = {
  // bla: PropTypes.string,
};

FileUpload.defaultProps = {
  // bla: 'test',
};

export default FileUpload;
