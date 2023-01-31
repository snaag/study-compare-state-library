import {createSlice} from "@reduxjs/toolkit";
import {TodoItem} from "../domain/TodoItem";

const initialState = {
    list: []
}

let sequence = 0;

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action) {
            // payload = text
            const todoItem = new TodoItem(sequence, action.payload);
            sequence++;
            state.list = [...state.list, todoItem];
        },
        deleteTodo(state, action) {
            // payload = id
            state.list = state.list.filter((todoItem) => todoItem.id !== action.payload)
        },
        checkTodo(state, action) {
            // payload = id
            state.list = state.list.map((todoItem) => todoItem.id === action.payload ? {
                    ...todoItem,
                    isDone: !todoItem.isDone
                } : todoItem
            )
        }
    }
});

// actions
export const {addTodo, deleteTodo, checkTodo} = todoSlice.actions;

// reducer
export default todoSlice.reducer;


