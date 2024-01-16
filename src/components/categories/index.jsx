import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SHOPPING_LIST } from '../../constans'
import { getCategories } from '../../services/categories'

export const Categories = ({value, handleChange}) => {

  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories();
        setCategories(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
      return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-category">{SHOPPING_LIST.CATEGORY}</InputLabel>
          <Select
            labelId="select-category"
            value={value}
            label="category"
            onChange={handleChange}
          >
            {categories.map((category) =>             
            <MenuItem value={category.name}>{category.name}</MenuItem>
            )}

          </Select>
        </FormControl>
      </Box>
    );
}
