import { TaskListProp, setTaskProps } from 'interface'
import React,{useState} from 'react'
interface TaskItemProps {
    item: TaskListProp;
    key: string;
    setTask: any;
  }
const TaskItem = ({ item,setTask }: TaskItemProps) => {
    const [checked,setChecked] = useState<boolean>(false)
    const updateIsCompleteById = (id:string, newIsComplete:boolean) => {
        // Use setTasks to update the state
        setTask((prevTasks:any) => {
          return prevTasks.map((task:any) => {
            if (task.id === id) {
              // Update the isComplete property for the found task
              return { ...task, isCompleted: newIsComplete };
            }
            return task;
          });
        });
      };
    const handChecked = (e:React.ChangeEvent<HTMLInputElement>,id:string)=>{
        console.log(e.target.checked)
        setChecked(e.target.checked)
        if(e.target.checked){
            updateIsCompleteById(id,e.target.checked)
        }else{
            updateIsCompleteById(id,e.target.checked)
        }
    }
    const deleteTask = (id:string)=>{
        
        setTask((prev:any)=>prev.filter((item:any)=>item.id!==id))
    }
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
            <input type="checkbox" name={item.id} defaultChecked={checked} id={item.id} onChange={(e)=>handChecked(e,item.id)}/>
            <label htmlFor={item.id} className={`text-[16px] ${item.isCompleted ? "line-through":""}`}>{item.task}</label>
        </div>
        <button onClick={()=>deleteTask(item.id)} className='px-[16px] py-[8px] border-red-500 rounded-lg border-[2px] text-red-500 hover:text-white hover:bg-red-500 transition-all duration-150'>Delete</button>
    </div>
  )
}

export default TaskItem