import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "Doctor's Appointment",
    //   reminder:true,
    //   day:"15th of feb",
    // },
    // {
    //   id: 2,
    //   text: "Playing Games",
    //   reminder:false,
    //   day:"15th of feb",
    // },
    // {
    //   id: 3,
    //   text: "Business Pitch",
    //   reminder:true,
    //   day:"15th of feb",
    // },
    // {
    //   id: 4,
    //   text: "Drink Water",
    //   reminder:false,
    //   day:"15th of feb",
    // },
  ]);
  //Adding the task
  const onAdd=(task)=>{
    const id=Math.floor(Math.random()*10000)+1;
    const newTask={id,...task};
    setTasks([...tasks,newTask]);
  }
  //Delete functionality
  const deleted=(id)=>{
        
        setTasks(tasks.filter((task)=>
          task.id!==id
        ))
    }
    // Toggle Reminder
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id? {...task,reminder:!task.reminder}:task))
    
    }
  return (
    <div className="container">
      <Header helper={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={onAdd}/>};
      { tasks.length >0?(
      <Tasks tasks={tasks} onDelete={deleted}  onToggle={toggleReminder} />):(<h1>Nothing to show</h1>)
}
    </div>
  );
}

export default App;
