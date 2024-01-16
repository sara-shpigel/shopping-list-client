import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { SHOPPING_LIST } from '../../constans'
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';


export const SumProducts = () => {
  const categorys = useSelector((shoppingStore)=>shoppingStore.shoppingListSlice.value)

  const countProducts = (products) => {
    const totalCount = products.reduce((acc, product) => acc + product.count, 0);
    return totalCount == 1 ? SHOPPING_LIST.ONE_PRODECT : totalCount + SHOPPING_LIST.PRODUCTS
  }
  return (
  <>       
   <h2>{SHOPPING_LIST.PICK_UP_MESSAGE}</h2>
    <Paper sx={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
        {categorys
              .map((category) => {
                console.log(category)
                return (
                    <TableContainer sx={{ maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                            <TableCell sx={{ maxHeight: 440, textAlign: 'center'}}
                              key={category.name}
                            >
                              {category.category} - 
                               {countProducts(category.products)}
                            </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {category.products
                          .map((product) => {
                            return (
                              <TableRow hover key={category.id} >
                                {product.name}
                                {product.count > 1 ? ` (${product.count})`: ''}

                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              })}
    </Paper>
    </>
  );
}