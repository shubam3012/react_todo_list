import {  TaskItemInterface } from "../../common/interfaces"


const TaskItem=({title,description}:TaskItemInterface) =>{
return <div style={{ display:'flex'}}>
    <div>{title}</div>
    <div>{description}</div>
</div>
}

export default TaskItem