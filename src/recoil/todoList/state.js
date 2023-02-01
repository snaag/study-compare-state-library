import {atom, selector} from "recoil";

// state
export const todoState = atom({
    key: "todo",
    default: []
});

// selector
export const getDoneTodoListState = selector({
    key: "todo/done",
    get: ({get}) => {
        const todoList = get(todoState);
        return todoList.reduce((acc, curr) => {
            const isDone = curr.isDone ? 1 : 0;
            return [...acc, isDone];
        }, []).sort((a, b) => a-b);
    }
})
