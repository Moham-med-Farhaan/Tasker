import {FaTimes} from 'react-icons/fa';
const Task=({task , onDelete,onToggle})=>{
    
    return (
        <div className={`task ${task.reminder}? reminder : ''`} onDoubleClick={()=>onToggle(task.id)}>
            <h3> {task.text} <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}  /></h3>
            <h2>{task.day}</h2>
            
            
        </div>
    )

}
export default Task;