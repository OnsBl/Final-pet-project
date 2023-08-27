import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCartTotal,

} from '../Slices/CartSlice';
import { MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import Total from '../components/Cart/Total';
import CartItem from '../components/Cart/CartItem';

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8"> 
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Carte - {cart.length} élements</h5>
                </div>
                <div className="card-body">
                  {cart?.map((data) => (
                    <CartItem data={data} />
                  ))}
                </div>
              </div>
            </div>
            
              <Total />
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
