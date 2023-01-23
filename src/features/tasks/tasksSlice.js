import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload)
            state.push(action.payload);

        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },

        editCounterIncrement: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                foundTask.count = parseInt(foundTask.count) + 1;
                let answer = parseInt(foundTask.count) * parseInt(foundTask.price)
                foundTask.subTotal = answer + ""
            }
        },
        editCounterDecrement: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                if (parseInt(foundTask.count) > 1) {
                    foundTask.count = parseInt(foundTask.count) - 1;
                    let answer = parseInt(foundTask.count) * parseInt(foundTask.price)
                    foundTask.subTotal = answer + ""
                }
            }
        }
    },
});

export const { addTask, editTask, deleteTask, editCounterIncrement, editCounterDecrement } = userSlice.actions;
export default userSlice.reducer;