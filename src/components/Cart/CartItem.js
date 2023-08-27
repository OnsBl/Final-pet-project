import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from '../../Slices/CartSlice';
import {ReactComponent as Remove} from '../../remove.svg';

function CartItem({data}) {
    const dispatch = useDispatch();
  return (
    <div>  <div className="row">
    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <div
        className="bg-image hover-overlay hover-zoom ripple rounded"
        data-mdb-ripple-color="light"
      >
        <img
          src={data.image_url}
          className="w-100"
          alt="produit"
        />
      </div>
    </div>

    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
      <p>
        <strong>{data.product_name}</strong>
      </p>

    
      <button type="button" class="btn btn-outline-danger"   onClick={() => dispatch(removeItem(data.id))}>
      <Remove/>

     </button>
    </div>
   

    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
      <div
        className="d-flex mb-4"
        style={{ maxWidth: "300px" }}
      >
    <button
      style={{
        backgroundColor: '#98c4bf',
        color: 'white',
        borderColor: '#98c4bf',
        fontSize: '16px',  
      }}
      className="btn px-3 me-2"
      onClick={() => dispatch(decreaseItemQuantity(data.id))}
    >
      -
    </button>

    <div style={{ width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <input
    id="form1"
    min="0"
    name="quantity"
    value={data.quantity}
    type="number"
    className="form-control"
    onChange={() => null}
    disabled
    style={{ textAlign: 'center', border: 'none', background: 'none' }}
  />
</div>

    <button
      style={{
        backgroundColor: '#98c4bf',
        color: 'white',
        borderColor: '#98c4bf',
        fontSize: '16px',  
      }}
      className="btn px-3 ms-2"
      onClick={() => dispatch(increaseItemQuantity(data.id))}
    >
      <i className="fas fa-plus"></i>
    </button>
      </div>

      <p className="text-start text-md-center">
        <strong>{data.price} DT</strong>
      </p>
    </div>
    <hr className="my-4" />
  </div></div>
  )
}

export default CartItem