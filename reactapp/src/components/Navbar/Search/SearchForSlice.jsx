import { createSlice } from '@reduxjs/toolkit';

const searchForSlice = createSlice({
    name: 'searchFor',
    initialState: {
        searchFor: '',
    },
    reducers: {
        setSearchFor: (state, action) => {
            state.searchFor = action.payload;
        },
    },
});

export const { setSearchFor } = searchForSlice.actions;
export const selectedSearchFor = (state) => state.searchFor.searchFor;
export default searchForSlice.reducer;