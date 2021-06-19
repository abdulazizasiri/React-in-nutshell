import Header from './components/Header'
import Tasks from './components/Tasks'
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
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deletedTask}/>
    </div>

  );
}

export default App;
