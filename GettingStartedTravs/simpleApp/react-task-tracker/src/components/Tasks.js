
const tasks = [
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
        text: "Joing SD",
        day:"Soon",
        reminder: false 
    }
]
 const Tasks = () => {
    return (
        <>
         {tasks.map((e) => (<h1>{e.text}</h1>
         ))}
            
        </>
    )
}

export default Tasks