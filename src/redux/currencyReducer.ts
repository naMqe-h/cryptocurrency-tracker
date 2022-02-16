import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface curencyTypeState {
    currency: string
}

const initialState: curencyTypeState = {
    currency: 'usd'
}

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload
        }
    }
})

export const { setCurrency } = currencySlice.actions
export const selectUser = (a: RootState) => a
export default currencySlice.reducer