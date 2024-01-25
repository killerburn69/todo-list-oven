'use client'
import React, { useState } from 'react'
import TaskForm from './TaskForm'
import { TaskListProp } from 'interface'
import TaskItem from './TaskItem'

const TodoList = () => {
    const [taskList, setTaskList] = useState<TaskListProp[]>([
            
        ]) 
  return (
    <div className='w-[300px] md:w-[800px] bg-white text-black p-6'>
        <h1 className='text-2xl font-bold mb-[8px]'>Todo List</h1>
        <div>
            <TaskForm setTask={setTaskList}/>
            <div className='flex flex-col gap-y-3'>
                {taskList.map((item:TaskListProp,index:number)=>(
                    <TaskItem item={item} key={item.id} setTask={setTaskList} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default TodoList