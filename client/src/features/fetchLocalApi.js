import { createAsyncThunk } from "@reduxjs/toolkit";

const serverUrl = "http://localhost:3001"

export const registerPlayer = createAsyncThunk('registerPlayer', async (registerInfos) => {
    const { pseudo, email, password, confirmPassword } = registerInfos;
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pseudo,
            email,
            password,
            confirmPassword
        })
    };
    const request = await fetch(`${serverUrl}/api/register`, requestOptions)
    const response = await request.json()
    if (!response) {
        console.log('error')
    }
    return response
});


export const loginPlayer = createAsyncThunk('loginPlayer', async (loginInfos) => {
    const { pseudo, password } = loginInfos;
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pseudo,
            password
        })
    };
    const request = await fetch(`${serverUrl}/api/login`, requestOptions)
    const response = await request.json()
    if (!response) {
        console.log('error')
    }
    return response
});


export const verifyEmail = async (emailToken) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailToken
        })
    };

    const request = await fetch(`${serverUrl}/api/verify-email`, requestOptions);
    const response = await request.json()
    if (!response) {
        console.log('error')
    }
    return response
};
export const updatePlayer = async (updateInfos) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            updateInfos
        )
    };
    const request = await fetch(`${serverUrl}/api/update`, requestOptions);
    const response = await request.json()
    console.log(response)
    if (!response) {
        console.log('error')
    }
    return response
};