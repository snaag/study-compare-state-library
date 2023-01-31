import React from 'react';

const TodoList = () => {
    const list = [];

    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text"/>
                <button>추가</button>
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
    return (
        <li>
            <input defaultChecked={isDone} type="checkbox"/>
            <span>{text}</span>
        </li>
    );
};


export default TodoList;
