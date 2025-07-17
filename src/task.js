
export const Task = (props) => {

    // return (<div><h1>{props.taskName}</h1>
    //         <button onClick={props.completeTask}>Complete</button>
    //         <button onClick={() =>props.removeTask(props.id)}>f</button>
    //         </div>
    //       )
    return (<div className="mainTask" style={{color: props.complete ? "red" : "black"}}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}>complete</button>
        <button onClick={() =>props.removeTask(props.id)}>f</button>
    </div> )
}