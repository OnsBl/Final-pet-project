import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchProducts } from '../../Slices/SearchSlice'; 
import ProductItem from './ProductItem';
import './productList.css';

const ProductList = () => {
  const filteredProducts = useSelector(state => state.search.filteredProducts);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  return (
    <div className="product-list">
      <h1>Nos derniers produits</h1>
      <div className="card-grid">
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
