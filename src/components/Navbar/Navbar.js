import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../Slices/SearchSlice';
import { Link } from 'react-router-dom'; 
import "./NavBar.css";
import { ReactComponent as Shop } from '../../shopcart.svg';
import { getCartTotal } from '../../Slices/CartSlice';

export default function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  const handleSearchInputChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchInput(newSearchQuery);
    dispatch(setSearchQuery(newSearchQuery));
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav className="navbar navbar-expand-sm p-3 fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4nyS487ITPOOkSocSiCVc5GOVRPL29VAyOLzT58JPA&s" alt="HK Logo" className="logo-img" style={{ width: '90px' }}/> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item ps-5">
              <Link to="/" className="nav-link">Acceuil</Link>
            </li>
            <li className="nav-item ps-5">
              <Link to="/cart" className="nav-link">Panier ({totalQuantity})</Link>
            </li>
    
            <li className="nav-item ps-5">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto nav-item search-form">
            <div className="search-wrapper">
              <input className="form-control me-2 p-1 ps-2" type="text" placeholder="Search" value={searchInput} onChange={handleSearchInputChange} />
              <button type="submit" className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        
        </div>
      </div>
    </nav>
  );
}
