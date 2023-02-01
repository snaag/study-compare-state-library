import React, {useState} from 'react';
import {useRecoilState, useResetRecoilState} from "recoil";
import {doneTodoListState, getDoneTodoListState, todoSelector, todoState} from "../../recoil/todoList/state";
import {TodoItem} from "../../domain/TodoItem";
// https://talkwithcode.tistory.com/76

const TodoList = () => {
    const [text, setText] = useState('');
    const [list, setList] = useRecoilState(todoState);
    const [sequence, setSequence] = useState(0);

    const handleChangeText = ({target}) => {
        setText(target.value);
    }

    const addTodo = () => {
        setList((prevList) => [...prevList, new TodoItem(sequence, text)]);
        setSequence(sequence + 1);
    }



    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text" value={text} onChange={handleChangeText}/>
                <button onClick={addTodo}>추가</button>
            </div>
            <div>
                {
                    list.map((todo) => <TodoListItem key={todo.id} {...todo}/>)
                }
            </div>
        </div>
    );
};


const TodoListItem = ({id, isDone, text}) => {
    const [list, setList] = useRecoilState(todoState);

    const checkTodo = (id) => {
        setList((prevList) =>
            prevList.map((item) => item.id === id ?
                {...item, isDone: !item.isDone} : item))
    }

    return (
        <li>
            <input onChange={() => checkTodo(id)} defaultChecked={isDone} type="checkbox"/>
            <span>{text}</span>
        </li>
    );
};


export default TodoList;
