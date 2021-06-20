import {useState} from 'react'

 const AddTask = () => {
     const [text,setText] = useState('')
     const [day,setDay] = useState('')
     const [reminder, setReminder] = useState(false)
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input value={text} onChange={(e) => {setText(e.target.value)} } type="text" placeholder="Add Task"/>
            </div>

            <div className="form-control">
                <label>Day & Time </label>
                <input value={day} onChange={(e) => {setDay(e.target.value)} } type="text" placeholder="Add day and time"/>
            </div>

            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)} } type="checkbox"/>
            </div>
            <input  className="btn btn-block" type="submit" value="Save Task"/> 
        </form>
    )
}


export default AddTask;