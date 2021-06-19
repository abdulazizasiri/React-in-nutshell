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
  return (
    <div className="container">
      <Header title="Hello"/>
      <Tasks tasks={tasks}/>
    </div>

  );
}

export default App;
