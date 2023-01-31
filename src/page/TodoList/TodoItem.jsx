import React from 'react';
import {useDispatch} from "react-redux";
import {checkTodo, deleteTodo} from "../../store/todoSlice";

const TodoItem = ({id, isDone, text}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                defaultChecked={isDone}
                type="checkbox"
                onChange={() => dispatch(checkTodo(id))}/>
            <span>{text}</span>
            <button onClick={() => dispatch(deleteTodo(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;
