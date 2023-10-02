import {createSlice} from '@reduxjs/toolkit'
// import { clearAllUser } from '../actions'; //here we are importing our action

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers :{
        addUser(state, action){
            state.push(action.payload); //here we push data which is immutable
        },
        removeUser(state, action){
            state.splice(action.payload , 1);
        },
        deleteUsers(state, action){
            return [];
        },
        extraReducers(builder){
            builder.addCase(userSlice.actions.deleteUsers, (state,action)=>{
                return [];
            });
        },
        // extraReducers(builder){
        //     builder.addCase(ClearAllUsers, (state,action)=>{ //not dependent on slices
        //         return [];
        //     });
        // }
    },

})

export default userSlice.reducer;
export const {addUser, removeUser, deleteUsers} = userSlice.actions;