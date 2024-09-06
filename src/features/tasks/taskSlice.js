import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTasks = createAsyncThunk("todo/fetchTasks",async () =>{
    const resp = await axios.get("http://localhost:5000/tasks");
    return resp.data; // array of tasks

})

const taskSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks:[],
       
        loading:false,
        error:null
    },
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload)
        },
        removeTask:(state,action) =>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        editTask:(state,action) =>{
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[index] = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchTasks.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchTasks.fulfilled,(state,action)=>{
            state.loading = false;
            state.tasks = action.payload;
           

        })
        .addCase(fetchTasks.rejected,(state,action)=>{
            state.loading = false;
            state.error  = action.error.message;
        })
    }
})

export const {addTask,removeTask,editTask} = taskSlice.actions;

export default taskSlice.reducer;