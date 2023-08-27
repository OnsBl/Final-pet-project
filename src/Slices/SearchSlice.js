import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'; 

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    products: [],
    searchQuery: '',
    filteredProducts: [],
  },
  reducers: {
    setSearchQuery: (state, action) => {
      const newSearchQuery = action.payload;
      const filteredProducts = state.products.filter(product =>
        product.product_name.toLowerCase().includes(newSearchQuery.toLowerCase())
      );

      return { ...state, searchQuery: newSearchQuery, filteredProducts };
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
  },
});

export const { setSearchQuery, setProducts } = searchSlice.actions;
export default searchSlice.reducer;

// Thunk pour charger les produits
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/pet_products");
    dispatch(setProducts(response.data)); 
  } catch (error) {
    console.error('Error fetching pet products:', error);
  }
};


