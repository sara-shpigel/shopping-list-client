import React, { useState } from 'react';
import { SHOPPING_LIST } from '../../constans';
import { TextField, Button } from '@mui/material';
import { FinalList } from '../finalList';
import { useSelector } from 'react-redux';


export const OrderForm = () => {
  const [fullName, setFullName] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Change initial value to false
  const shoppingList = useSelector((state) => state.shoppingListSlice.value);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleFullAddressChange = (event) => {
    setFullAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // You can add validation logic here before making the request
    
    // Make an HTTP POST request to your server
    try {
        const response = await fetch('http://localhost:63283/api/product/addOrder', {
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Full_name: fullName,
          Full_address: fullAddress,
          Email: email,
          Order_details: JSON.stringify({shoppingList})
        }),
      });

      if (response.ok) {
        console.log('Order placed successfully');
      } else {
        console.error('Failed to place order');
        console.log(JSON.stringify({
            fullName,
            fullAddress,
            email,
            shoppingList
          }))
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setIsFormSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{SHOPPING_LIST.ORDER_FORM}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <TextField
              label={SHOPPING_LIST.FULL_NAME}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              error={!fullName && isFormSubmitted}
              helperText={!fullName && 'שדה חובה'}
              onChange={handleFullNameChange}
            />
            <TextField
              label={SHOPPING_LIST.FULL_ADDRESS}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              error={!fullAddress && isFormSubmitted}
              helperText={!fullAddress && 'שדה חובה'}
              onChange={handleFullAddressChange}
            />
            <TextField
              label={SHOPPING_LIST.EMAIL}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              error={!email && isFormSubmitted}
              helperText={!email && 'שדה חובה'}
              onChange={handleEmailChange}
            />
          </div>
          <FinalList />
        </div>
        <Button variant="outlined" type="submit" sx={{ width: { xs: '100%', sm: '50%' } }}>
          {SHOPPING_LIST.CONFIRM_ORDER}
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
