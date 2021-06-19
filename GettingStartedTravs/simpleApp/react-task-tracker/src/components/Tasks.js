
import Task from './Task'
 const Tasks = ({tasks, onDelete, onToggle}) => {
  
    return (
        <>
         {tasks.map((task) => (
             // This is magical
         <Task key={task.id} task={task} 
         onDelete={()=>onDelete(task.id) }
         onToggle={() => onToggle(task.id)} />
         ))}
            
        </>
    )
}

export default Tasks