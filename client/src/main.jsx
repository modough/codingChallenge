import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './features/authSliceReducer.js'
import { Provider } from 'react-redux';

const reducers = combineReducers({
  playerReducer: authSliceReducer,
})

const store = configureStore({
  reducer: reducers
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
