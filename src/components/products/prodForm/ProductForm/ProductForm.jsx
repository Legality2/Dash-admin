import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
//import { Test } from './ProductForm.styles';

class ProductForm extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      productImg: null
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.prodUpload = this.prodUpload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  
    this.input = React.createRef();
}

    
onFileChange(e) {
  this.setState({ productImg: e.target.files[0] });
}

onSubmit(e) {
  e.preventDefault()
  const form = new FormData();
  form.append('name', this.inputName.value);
  form.append('price', this.inputPrice.value);
  form.append('upl', this.state.productImg);
 
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
console.log(form);

  axios.post("http://localhost:4000/api/products", form, config).then(res => {
      console.log(res)
  })
}

  prodUpload = (e) => {
    e.preventDefault();
    var test = {
      name: this.inputName.value,
      price: this.inputPrice.value,
      productImg: this.state.productImg
    };

    axios.post("http://localhost:4000/api/products", test, {
    }).then(res => {
        console.log(res)
    })
  }

  componentWillMount = () => {
    console.log('ProductForm will mount');
  }

  componentDidMount = () => {
    console.log('ProductForm mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ProductForm will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ProductForm will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ProductForm did update');
  }

  componentWillUnmount = () => {
    console.log('ProductForm will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ProductFormWrapper">
         <div className="container">
          <div className="row">
          <form onSubmit={this.onSubmit}>
    <div class="row">
        <div class="col">
            <div class="input-group"><span class="input-group-text">Product Name</span><input type="text" class="form-control" ref={(input) => this.inputName = input } /></div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group"><span class="input-group-text">Price</span><input type="text" class="form-control" ref={(input) => this.inputPrice = input } /></div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group"><input type="file" onChange={this.onFileChange} class="form-control" /></div>
        </div>
    </div>
    <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
</form>
          </div>
        </div>
      </div>
    );
  }
}

ProductForm.propTypes = {
  // bla: PropTypes.string,
};

ProductForm.defaultProps = {
  // bla: 'test',
};

export default ProductForm;
