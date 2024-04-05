import { createSlice } from "@reduxjs/toolkit";
import { registerPlayer, loginPlayer, verifyEmail } from "./fetchLocalApi";


const initialState = {
    token: null,
    pseudo: null,
    email: null,
    id: null,
    isVerify: false,
    emailToken: null,
    isLoading: false,
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createPlayer: (registerPlayer, (state, action) => {
            console.log(action)
            const { pseudo, email, _id, isVerify, emailToken, error } = action.payload
            state.pseudo = pseudo
            state.email = email
            state.id = _id
            state.isVerify = isVerify
            state.emailToken = emailToken
            state.isLoading = true
            state.error = error

        }),
        logout: () => {
            return initialState
        },
        updatePlayer: (verifyEmail, (state, action) => {
            console.log(action)
            state.isVerify = action.payload.isVerify
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginPlayer.fulfilled, (state, action) => {
                console.log(action)
                state.token = action.payload.token
                state.pseudo = action.payload.pseudo
                state.email = action.payload.email
                state.id = action.payload.playerid
                state.token = action.payload.token
                state.isVerify = action.payload.isVerify
                state.error = action.payload.error
            })
            .addCase(loginPlayer.rejected, (state) => {
                state.token = null;
                state.pseudo = null;
                state.id = null;
            })
    }
});


export const { createPlayer, logout, login, updatePlayer } = authSlice.actions
export default authSlice.reducer;