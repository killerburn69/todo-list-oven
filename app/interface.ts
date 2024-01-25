export interface TaskListProp{
    id:string,
    task:string,
    isCompleted:false,
}
export type setTaskProps = {
    setTask:React.Dispatch<React.SetStateAction<TaskListProp[]>>
}