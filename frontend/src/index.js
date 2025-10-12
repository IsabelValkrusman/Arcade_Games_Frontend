import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {Provider} from 'react-redux'
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

import PriceScreen from './screens/PriceScreen';
import FoodScreen from './screens/FoodScreen';

import PartyScreen from './screens/PartyScreen';

import GroupScreen from './screens/GroupScreen';



import ArcadeScreen from './screens/ArcadeScreen';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/price' element={<PriceScreen />} />
      <Route path='/food' element={<FoodScreen />} />
      <Route path='/party' element={<PartyScreen />} />
      <Route path='/group' element={<GroupScreen />} />
      <Route path='/arcade' element={<ArcadeScreen />} />

      
    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);


reportWebVitals();
