import { createSlice } from "@reduxjs/toolkit";
import { registerPlayer, loginPlayer } from "./fetchLocalApi";


const initialState = {
    token: null,
    pseudo: null,
    email: null,
    id: null,
    isVerify: false,
    emailToken: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createPlayer: (registerPlayer, (state, action) => {
            const { pseudo, email, _id, isVerify, emailToken } = action.payload.body
            console.log(action)
            state.pseudo = pseudo
            state.email = email
            state.id = _id
            state.isVerify = isVerify
            state.emailToken = emailToken
        }),
        logout: () => {
            return initialState
        },
        login: (loginPlayer.fulfilled, (state, action) => {
            console.log(action)
            state.token = action.payload.body.token
            state.pseudo = action.payload.body.pseudo
            state.email = action.payload.body.email
            state.id = action.payload.body._id
        })
    }
});


export const { createPlayer, logout, login } = authSlice.actions
export default authSlice.reducer;