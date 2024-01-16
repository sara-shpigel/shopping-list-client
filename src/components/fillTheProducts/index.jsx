import React from 'react';
import { Title } from '../title'
import { AddProduct } from '../addProduct'
import { SumProducts } from '../sumProducts'
import { CompleteTheOrder } from '../completeTheOrder'

export const FillTheProducts = () => {
     return (
        <div style={{ textAlign: 'center' }}>
        <Title />
            <AddProduct />
            <SumProducts />
            <CompleteTheOrder />
        </div>
     )
}