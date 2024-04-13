// import { createSlice, nanoid } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push({ ...action.payload, id: nanoid() });
    },
    updateUser: (state, action) => {
      const userIndex = state.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state[userIndex] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
