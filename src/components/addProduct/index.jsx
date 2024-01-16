import React, { useState } from 'react';
import { SHOPPING_LIST } from '../../constans'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Categories } from '../categories';
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalItems } from '../../features/sumShoppingSlice';
import { addProduct } from '../../features/shoppingListSlice';

export const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
      };

      const handleProductCategoryChange = (event) => {
        setProductCategory(event.target.value);
      };

    const dispatch = useDispatch();
    const totalItems = useSelector((shoppingStore)=>shoppingStore.sumShoppingSlice.value)
    const addTheProduct = () => {
        dispatch(updateTotalItems())
        dispatch(addProduct({name: productName, category: productCategory }))
        setProductCategory('');
        setProductName('')
    }
    const disableToAdd = () => {
        return productCategory == '' || productName == ''
    }
    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>{SHOPPING_LIST.TOTAL_ITEMS(totalItems)}</div>
        <Button onClick={addTheProduct} variant="outlined" disabled={disableToAdd()}>{SHOPPING_LIST.ADD}</Button>
        <Categories value={productCategory} handleChange={handleProductCategoryChange}/>  
        <TextField label={SHOPPING_LIST.PRODUCT} variant="outlined" value={productName} onChange={handleProductNameChange}/>
    </div>
    )
}