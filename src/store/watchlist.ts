import { createSlice } from "@reduxjs/toolkit";

const init: [] | number[] = [];

interface Action {
  payload: {id: number};
}

const watchlistSlice = createSlice({
  initialState: init,
  name: "watchlist",
  reducers: {
    addMovie(state, action: Action) {
      const {id} = action.payload;
      return [id, ...state ];
    },
    removeMovie(state, action: Action) {
      const {id} = action.payload;
      return state.filter((movie, i) => movie !== id);
    }
  }
});
export const watchlistActions = watchlistSlice.actions;
export const watchlistReducer = watchlistSlice.reducer;