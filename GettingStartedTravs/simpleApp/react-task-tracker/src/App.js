import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
    {
        id:1, 
        text: "Doctors appointments",
        day:"21 Jun",
        reminder: true 
    },
    {
        id:2, 
        text: "Mom Money",
        day:"27 Jun",
        reminder: true 
    },
    {
        id:3, 
        text: "joining SD",
        day:"Soon",
        reminder: false 
    }
])
function deletedTask(id) {
  setTasks(tasks.filter((e)=>{
    return e.id !== id 
  }))
}
// We need to setStyle
const onToggleTasks =(id) => 
  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task
  )
  )
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length > 0 ? 
      (
      
      <Tasks tasks={tasks} onDelete={deletedTask} onToggle={onToggleTasks}/>)
      : (
        "No Tasks to show"
      )
      }
      
    </div>

  );
}

export default App;
