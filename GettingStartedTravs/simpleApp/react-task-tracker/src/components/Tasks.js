

 const Tasks = ({tasks}) => {
  
    return (
        <>
         {tasks.map((e) => (<h4 key={e.id}>{e.text}</h4>
         ))}
            
        </>
    )
}

export default Tasks