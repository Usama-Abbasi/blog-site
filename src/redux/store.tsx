import {createSlice,configureStore} from '@reduxjs/toolkit';
const authenticationSlice=createSlice({
    name:'Authentication',
    initialState:{login:false},
    reducers:{
        setLoggedIn:(state,action)=>{
            state.login=action.payload
        },
    },
})
export const store=configureStore({reducer:authenticationSlice.reducer});
export const {setLoggedIn}=authenticationSlice.actions;
export default {store,authenticationSlice}