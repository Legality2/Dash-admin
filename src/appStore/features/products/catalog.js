import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Switch, Link } from 'react-router-dom';
import { getProdById, getProducts } from './productSlice';
import  { useGetProductsQuery }  from '../../../api/nsApi';
import AddToCart from '../../../components/AddToCart/AddToCart';
import Example from '../../../components/audio/AudioPlayer';

export default function Products(props) {
  const state = useState(0);
  const { data, error, isLoading } = useGetProductsQuery('products');
  const url = '/products';
  const dispatch = useDispatch();

 
  

  return (
    <div className="row">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {console.log(props)}
            {data.map(function(item, index){
              return (
                <div className="col-md-4 col-lg-3 item" key={item.id}>
                  
                                   <div className="box" style={{borderRadius: "6px", borderStyle: "solid", borderColor: "rgba(255,193,7,0.78)", background: `url(${item.img}) center / cover`}} >
                                       <div className="cover" style={{background: "rgba(108,117,125,0.75)"}}>
                                           <h3 className="name">{item.name}</h3>
                                           <p className="title">{item.price}</p>
                                           <div><Example /></div>
                                           <div className="social"><a href="#"><AddToCart prod={item} /></a></div>
                                       </div>
                                   </div>
                                   <div>
                                       <h4 className="text-center" style={{textAlign: "center", marginBottom: "-25px;"}} ><Link to={`${url}/${item.id}`}>{item.name}</Link></h4>
                                       <hr style={{background: "var(--bs-yellow)", borderRadius: "-1px", fontSize: "5px", height: "7px", width: "248px", borderWidth: "0px", borderStyle: "solid"}} />
                                   </div>
                               </div>
                )
            })}
          
          
        </>
      ) : null}
    </div>
  )
}