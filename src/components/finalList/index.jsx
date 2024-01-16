import {React} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useSelector } from 'react-redux';

export const FinalList = () => {
    const shoppingList = useSelector((state) => state.shoppingListSlice.value);
    return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {shoppingList.map((category) => (
        <li key={category.category}>
          <ul>
            <ListSubheader>{category.category}</ListSubheader>
            {category.products.map((product) => (
              <ListItem key={`${category}-${product}`}>
                <ListItemText>
                    {product.name}{product.count > 1 ? ` (${product.count})`: ''}
                    </ListItemText>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}