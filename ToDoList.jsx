import React, {useState} from "react";
function ToDoList(){

    const [tasks, setTasks] = useState ([]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value); // while writing in text area it shows what we write
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t =>[...t, newtask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
       const updatedTasks = tasks.filter((_,i)=> i !== index);
       setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks [index],updatedTasks [index-1]] = 
            [updatedTasks[index-1],updatedTasks[[index]]];

            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks [index],updatedTasks [index+1]] = 
            [updatedTasks[index+1],updatedTasks[[index]]];

            setTasks(updatedTasks)
    }
}

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter A Task..."
                    value = {newtask}
                    onChange={handleInputChange}/>

                <button className="add-button" onClick={addTask}>
                    Add
                </button>
                <ol className="ordered-list">
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}> Delete </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
                </ol>
            </div>
        </div>
    );
}
export default ToDoList