import { createSlice } from "@reduxjs/toolkit"
const searchSlice = createSlice(
    {
        name:"search",
        initialState:{
            showState:false,
        },
        reducers:{
            toggleSearchView:(state)=>{
                state.showState= !(state.showState);
            }
        }
    }
)

export const {toggleSearchView} = searchSlice.actions;
export default searchSlice.reducer;