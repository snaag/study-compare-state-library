import React from 'react';
import clsx from 'clsx';

import {useTodoStore} from "../../zustand/store"

const Statistics = () => {
    const list = useTodoStore((state) => state.list)
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
                    list.map((isDone) => <div className={clsx('block', {
                        done: isDone
                    })}/>)
                }
            </div>
        </div>
    );
};

export default Statistics;
