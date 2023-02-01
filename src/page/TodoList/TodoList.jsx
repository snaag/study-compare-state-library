import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, checkTodo} from '../../store/todoSlice';

const TodoList = () => {
    const list = useSelector((state) => state.todo.list);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const updateText = ({target}) => {
        setText(target.value);
    }

    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text" value={text} onChange={updateText}/>
                <button onClick={() => dispatch(addTodo(text))}>추가</button>
            </div>
            <div>
                {
                    list.map((todo) => <TodoItem key={todo.id} {...todo}/>)
                }
            </div>
        </div>
    );
};

const TodoItem = ({id, isDone, text}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                defaultChecked={isDone}
                type="checkbox"
                onChange={() => dispatch(checkTodo(id))}/>
            <span>{text}</span>
        </li>
    );
};


export default TodoList;
