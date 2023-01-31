import React from 'react';
import {useSelector} from "react-redux";
import clsx from "clsx";

const Statistics = () => {
    const todoList = useSelector((state) => state.todo.list);
    const isDoneList = todoList
        .reduce((acc, curr) => {
            const isDone = curr.isDone ? 1 : 0;
            return [...acc, isDone];
        }, [])
        .sort((a, b) => a - b);

    return (
        <div>
            <h2>Statistics</h2>
            <div className="graph">
                {
                    isDoneList.map((isDone) => <div
                        className={clsx('block', {'done': Boolean(isDone), 'processing': !isDone})}/>)
                }
            </div>
        </div>
    );
};

export default Statistics;
