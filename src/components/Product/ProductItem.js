import React from 'react';
import  "./productItem.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Slices/CartSlice";
import { Button } from 'react-bootstrap';

const ProductItem = ({ product }) => {

  const dispatch = useDispatch();
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={product.image_url} fluid alt={product.product_name} />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{product.product_name}</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
        <MDBCardText>Prix :{product.price} DT</MDBCardText>
      </MDBCardBody>
      <div className='card-button'>
      <MDBBtn onClick={() => dispatch(addToCart(product)) } color="light" style={{ backgroundColor: "#98c4bf", color: "white" }}>
       Ajouter au panier
        </MDBBtn>
      </div>
     
    </MDBCard>
  );
};

export default ProductItem;
