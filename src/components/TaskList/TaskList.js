import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import './TaskList.css';

function TaskList(props) {
    const items = useSelector( state => state.taskList)

    return (
        <ul className='task-list'>
            {
                items.map( item => <li className='task-item-li' key={item.id}>
                        <TaskItem item={item}/>
                    </li> )
            }
        </ul>
    )
}

export default TaskList

