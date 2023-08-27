import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'; 
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
