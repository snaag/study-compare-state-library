import React from 'react';
import {useRecoilValue} from "recoil";
import clsx from "clsx";

import {getDoneTodoListState} from "../../recoil/todoList/state";

const Statistics = () => {
    const doneTodoList = useRecoilValue(getDoneTodoListState);

    return (
        <div>
            <h2>Statistics</h2>
            <div className="graph">
                {
                    doneTodoList.map((isDone) =>
                        <div className={clsx("block", {
                            done: isDone,
                        })}/>)
                }
            </div>
        </div>

    );
};

export default Statistics;
