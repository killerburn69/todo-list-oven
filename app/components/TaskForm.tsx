import { setTaskProps } from 'interface'
import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const TaskForm = ({setTask}:setTaskProps) => {
    const [value,setValue] = useState<string>("")
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>)=>{
        e.preventDefault()
        setTask((prev:any)=>[...prev,{id:uuidv4(),task:value,isCompleted:false}])
        setValue("")
    }
  return (
    <form className='flex md:flex-row flex-col gap-3 items-start md:items-center mb-3' onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder='ex: wrap the paper' className='p-2 flex-1 outline-none border-[1px] rounded-lg w-full' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='px-[16px] py-[8px] border-green-500 rounded-lg border-[2px] text-green-500 hover:text-white hover:bg-green-500 transition-all duration-150'>Add task</button>
    </form>
  )
}

export default TaskForm