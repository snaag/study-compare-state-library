import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

import {TodoItem} from "../domain/TodoItem";

let sequence = 0;

export const useTodoStore = create(
    devtools((set) => ({
        list: [],
        addTodo: (text) => set((state) => {
            const todoItem = new TodoItem(sequence, text);
            sequence++;
            return {
                list: [...state.list, todoItem]
            }
        }),
        checkTodo: (id) => set((state) => {
            return {
                list: state.list.map((todoItem) =>
                    todoItem.id === id ? {...todoItem, isDone: !todoItem.isDone} : todoItem)
            }
        })
    }))
)
