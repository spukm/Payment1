import { createSlice } from "@reduxjs/toolkit";
// import expense from "../compont/expense";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user: null,
    payments: [],
    expense: [],
    searchText:"",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload; // Update user state here
    },
    setSelectedEmail: (state, action) => {
      state.emails = action.payload;
    },
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setExpense: (state, action) => {
      state.expense = action.payload;
    },
  },
});

export const { setOpen,setSelectedEmail,setPayments,setExpense, setAuthUser, setSearchText,  } = appSlice.actions;

export default appSlice.reducer;
