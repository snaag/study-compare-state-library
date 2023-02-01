import React, {useState} from 'react';

import {useTodoStore} from '../../zustand/store';

const TodoList = () => {
    const [text, setText] = useState('');
    const list = useTodoStore((state) => state.list);
    const addTodo = useTodoStore((state) => state.addTodo);

    const updateText = ({target}) => {
        setText(target.value);
    }

    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input value={text} onChange={updateText} type="text"/>
                <button onClick={() => addTodo(text)}>추가</button>
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
    const checkTodo = useTodoStore((state) => state.checkTodo);

    return (
        <li>
            <input onChange={() => checkTodo(id)} defaultChecked={isDone} type="checkbox"/>
            <span>{text}</span>
        </li>
    );
};


export default TodoList;
