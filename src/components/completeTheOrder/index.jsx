import React from 'react';
import Button from '@mui/material/Button';
import { SHOPPING_LIST } from '../../constans'
import { useNavigate } from 'react-router-dom';

export const CompleteTheOrder = () => {
    const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate('/order-form');
  };

  return (
    <Button variant="outlined" onClick={handleCompleteOrder} sx={{width: { xs: '100%', sm: '50%' }}}>
      {SHOPPING_LIST.COMPLETE_THE_ORDER}
    </Button>
  );
};