import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const categories = useSelector((shoppingStore)=>shoppingStore.categoriesSlice.value);
// const shoppingList = categories.map((category) => ({
//     id: category.id,
//     name: category.name,
//     products: [],
//   }));
  const shoppingListSlice = createSlice({
    name:"shoppingList",
    initialState:{value: []},
    reducers:{
        addProduct:(state, actions)=>{
            const categoryIndex = state.value.findIndex((categoryObject)=>categoryObject.category==actions.payload.category);
            if(categoryIndex == -1){
                state.value.push({category: actions.payload.category, products:[{name:actions.payload.name, count:1}]})
            }
            else {
            const productIndex = state.value[categoryIndex].products.findIndex((product)=>product.name==actions.payload.name);
            if(productIndex == -1){
                state.value[categoryIndex].products.push({name: actions.payload.name, count: 1});
            }
            else {
                state.value[categoryIndex].products[productIndex].count += 1;
            }
        }
        }
    }
})
export const {addProduct} = shoppingListSlice.actions 
export default shoppingListSlice.reducer