
import React from 'react';
import { useSelector } from 'react-redux';

function Total() {
  const { totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  
  return (
    <div className="col-md-4"> 

      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Résumé</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Quantité totale
              <span>{totalQuantity} DT</span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Prix total</strong>
              </div>
              <span>
                <strong>{totalPrice} DT</strong>
              </span>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            style={{
              backgroundColor: '#98c4bf',  
              borderColor: '#98c4bf',
            }}
          >
            Paiement
          </button>
        </div>
      </div>

    </div>
  );
}

export default Total;
