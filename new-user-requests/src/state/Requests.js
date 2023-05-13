import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: [],
};

export const requestSlice = createSlice({
  name: "requests",
  initialState,

  reducers: {
    addNewStarterRequest: (state, action) => {
      return {
        ...state,
        requests: [action.payload, ...state.requests],
      };
    },
    deleteStarterRequest: (state, action) => {
      return {
        ...state,
        requests: state.requests.filter(
          (request) => request !== action.payload.id
        ),
      };
    },
    markAsDone: (state, action) => {
      //Find the item
      const index = state.requests.findIndex(
        (request) => request.id !== action.payload
      );
      //mark the item as done
      const newArray = [...state.requests];
      newArray[index].completed = true;
      //return new array
      return {
        ...state,
        requests: newArray,
      };
    },
  },
});

export const { addNewStarterRequest, deleteStarterRequest, markAsDone } =
  requestSlice.actions;

export default requestSlice.reducer;
