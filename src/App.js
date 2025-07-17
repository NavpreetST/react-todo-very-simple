
import './App.css';
import { useState } from 'react';
import {Task} from "./task"
function App() {

  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState("")

  const taskHandler = (event) => {

    setNewTask(event.target.value)

  }
  const addNewTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id +1, 
      taskName: newTask,
      complete: false,
    }


    setTaskList([...taskList, task])
  }
  const completeHandler = () => {
    setTaskList(taskList.map((task) => {
      return {...task, complete: !task.complete};
  }))

  }
  const complete = (id) => {
    setTaskList(
      taskList.map((task)=>{
        if(task.id ===id){
          return {...task, complete: !task.complete}
        }else{
          return task;
        }
      })
    )
  }
  const removeTask = (id) => {
    setTaskList(taskList.filter((task)=> task.id !== id))
    // const newTaskList = taskList.filter((name)=> name !== taskName)
    // setTaskList(newTaskList)
  }
 
  return (

    <div className="App">
      <div>

        <input onChange={taskHandler} />
        <button onClick={addNewTask}>addTask</button>
      </div>

      <div>
        {taskList.map((task) => {
          return <Task taskName ={task.taskName} id = {task.id} complete = {task.complete} removeTask = {removeTask} completeTask ={complete}/>
          return <div>
            <button onClick={completeHandler}>
              
            </button>
            
             </div>
          
          
        })}

      </div>

    </div>
  );
}

export default App;


 // const removeTask = (taskName) => {
  //   const newTaskList = taskList.filter((name)=>{
  //     if (name===taskName){
  //       return false
  //     }else{
  //       return true
  //     }
  //   })
  //   setTaskList(newTaskList)
  // }