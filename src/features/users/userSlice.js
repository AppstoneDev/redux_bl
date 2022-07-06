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
    setUsers: (state, data) => {
      state.userList = data.payload;
    }
  }
})

export const { addUser, setUsers } = userReducer.actions;

export const getUsers = (payload) => (dispatch, getState) => {
  try {
    fetch("https://reqres.in/api/users?page=" + getState().counter.value)
      .then((res) => res.json())
      .then((resJson) => {
        dispatch(setUsers(resJson.data));
      })
  } catch (err) {
    console.log(err);
  }
}

export default userReducer.reducer;