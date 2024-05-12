import { createSlice } from "@reduxjs/toolkit";

// 🟩 ==> READ this initialState data from UI components...
// const mode = useSelector(state => state?.theme?.mode);

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers: {
        
    // 🟨 WRITE ==> this initialState data from UI components...
    // onClick={() => dispatch(setMode())}
    // dispatch(setMode())
        
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : 'light';
        }
    }
 
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;