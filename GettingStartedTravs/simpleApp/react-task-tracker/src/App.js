import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
  
    getTasks()
  },tasks)

  // Fetch data from  a server

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    // REsponse ->   بيؤجه 
    const data = await res.json()

    return data
  }
function addTask(task) {
  

  console.log(`Task added ${task.day}`)
  const id = Math.floor(Math.random() * 1000) + 1 
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}


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
      <Header showTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
      { showAddTask && <AddTask onAddTask={addTask}/>}
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
