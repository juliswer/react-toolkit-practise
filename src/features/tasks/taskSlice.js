import {createSlice} from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [1, 2],
    reducers: {

    }
})

export default taskSlice.reducer