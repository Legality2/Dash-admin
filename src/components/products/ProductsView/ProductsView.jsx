import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../DropDown/DropDown';
import { getProdById, getProducts } from '../../../appStore/features/products/productSlice';
import  { useGetProductsQuery }  from '../../../api/nsApi';
import ProdModal from '../prodModal/prod';
//import { Test } from './ProductsView.styles';

function ProductsView(props) {
    const checkIfMusic = (t) => {
        // equals product
        if(t == null){
            return ''
        } else {
            return fixUrl(t)
        };
    };
    const fixUrl = (img) => {
        const proImg = img;
        const local = 'http://localhost:4000';
        const url = '/prod/' + proImg;
        const n = local + url;
        return n
    };
   

    const { data, error, isLoading } = useGetProductsQuery('products');
    console.log(data);
  return (
      <div>
        { error ? (
              <> Oh no there was an error </>
          ) : isLoading ? (
              <>Loading... </>
          ) : data ? (
              <> 
              <div id="content">
              <div className="container-fluid">
                  <h3 className="text-warning mb-4">Products View</h3>
                  <div className="card bg-dark bg-gradient shadow">
                      <div className="card-header py-3 bg-warning">
                          <p className="m-0 fw-bold" style={{color: "var(--bs-dark)"}}>Products Table</p>
                          <ProdModal />
                      </div>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-6 text-nowrap">
                                  <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show<select className="d-inline-block form-select form-select-sm">
                                              <option value="10" selected="">10</option>
                                              <option value="25">25</option>
                                              <option value="50">50</option>
                                              <option value="100">100</option>
                                          </select></label></div>
                              </div>
                              <div className="col-md-6">
                                  <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                              </div>
                          </div>
                          <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                              <table className="table my-0" id="dataTable" style={{color: "gold"}}>
                                  <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th>inStock</th>
                                          <th>Uploaded date</th>
                                          <th>revenue</th>
                                          <th>Options</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          data.map(function(item, index){
                                              return (
                                                  <tr key={index}>
                                          <td>
                                              <img className="rounded-circle me-2" width="30" height="30" src={checkIfMusic(item.specs.img.filename)}/>{item.name}</td>
                                          <td>${item.price}</td>
                                          <td>{item.specs.inStock}</td>
                                          <td>2008/11/28</td>
                                          <td>$162,700</td>
                                          <td><DropDown itemId={item._id} />
                                      
                                     </td>
                                      </tr>
                                              )
                                          })
                                      }
                                      
                                     
                                  </tbody>
                                  <tfoot>
                                      <tr>
                                          <td><strong>Name</strong></td>
                                          <td><strong>Price</strong></td>
                                          <td><strong>inStock</strong></td>
                                          <td><strong>Uploaded date</strong></td>
                                          <td><strong>Revenue</strong></td>
                                          <td><strong>Option</strong></td>
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
          

              </>
          ) : null
      }
    </div>
     
  
 
  )

}
  


ProductsView.propTypes = {
  // bla: PropTypes.string,
};

ProductsView.defaultProps = {
  // bla: 'test',
};

export default ProductsView;
