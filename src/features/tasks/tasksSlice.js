import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Product 1",
    description: "product descriptions",
    url : "https://image.shutterstock.com/image-photo/modern-computer-mouse-on-white-260nw-1090541303.jpg" ,
    price : '232323'
  },
  {
    id: "2",
    title: "Product 2",
    description: "this is product descriptions",
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHPqwq1w8oYN7pwY_j8mR6KFs_kzr686Kag&usqp=CAU",
    price :'2300023'
  },
  {
    id: "3",
    title: "Product 3",
    description: "product descriptions",
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1rh1C7B0X8NDMh0fLZX9mfaiueW7R3YvcA&usqp=CAU" ,
    price : '232323'
  },
  {
    id: "4",
    title: "Product 4",
    description: "this is product descriptions",
    url : "https://i.insider.com/5c101c597e912e1d065f28a7?width=1136&format=jpeg",
    price :'2300023'
  },
  {
    id: "5",
    title: "Product 5",
    description: "this is product descriptions",
    url :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeupBTputn6kJMKH9ngYO1RtZ0mmj07g8Gw&usqp=CAU" ,
    price :'2300023'
  },
];

const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description ,price} = action.payload;
      const foundProduct = state.find((task) => task.id === id);
      if (foundProduct) {
        foundProduct.title = title;
        foundProduct.description = description;
        foundProduct.price = price ;
      }
    },
    deleteTask: (state, action) => {
      const foundProduct = state.find((task) => task.id === action.payload);
      if (foundProduct) {
        state.splice(state.indexOf(foundProduct), 1);
      }
    },
    
  },
});

export const { addTask, editTask, deleteTask ,filteredProducts } = userSlice.actions;
export default userSlice.reducer;
