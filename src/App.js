import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FillTheProducts } from './components/fillTheProducts';
import { OrderForm } from './components/orderForm';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import sumShoppingSlice from './features/sumShoppingSlice'
import shoppingListSlice from './features/shoppingListSlice'

const shoppingStore = configureStore({
  reducer:{
    sumShoppingSlice,
    shoppingListSlice
  }
})

function App() {
  return (
    <Provider store={shoppingStore}>
      <Router>
      <Routes>
        <Route path="/" element={<FillTheProducts />} />
        <Route path="/order-form" element={<OrderForm />} />
      </Routes>
    </Router>
    </Provider>
  );
}


export default App;
