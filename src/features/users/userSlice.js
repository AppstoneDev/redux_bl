import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "NextStacks",
  userList: []
}

export const userReducer = createSlice({
  name: "userReducer",
  initialState, //initial value of all reducers
  reducers: {
    //all actions
    addUser: (state)=> {
      state.userList = [{
        name: "Akash",
        phone: "987654321",
        email: "akash@gmail.com"
      }]
    }
  }
})

export const { addUser } = userReducer.actions;

export default userReducer.reducer;