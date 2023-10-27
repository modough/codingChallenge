import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3001"

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
    const promise = await fetch("http://localhost:3001/api/register", requestOptions)
    const response = await promise.json()
    if (!response) {
        console.log('error')
    }
    return response
});


export const loginPlayer = (loginDetails) => {
    const { pseudo, password } = loginDetails;
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
    fetch(`${url}/api/login`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}