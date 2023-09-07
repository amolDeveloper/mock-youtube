import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        lang: 'en'
    },
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const { changeLang } = gptSlice.actions;

export default gptSlice.reducer;