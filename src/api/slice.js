import { createSlice } from '@reduxjs/toolkit';

const followSlice = createSlice({
    name: 'follow',
    initialState: {follows:[]},
    reducers: {
        setFollow(state,  {payload:id}) {
        state.follows.push({id});
      },
    }
})

export const {setFollow} = followSlice.actions
export default followSlice.reducer;