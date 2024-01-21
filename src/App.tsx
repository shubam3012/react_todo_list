import "./App.css";
import { TaskItemInterface } from "./common/interfaces";
import TaskItem from "./components/task-item";

function App() {
  const items: TaskItemInterface[] = [
    { title: "task 1", description: "this is task 1" },
    { title: "task 2", description: "this is task 2" },
  ];
  return items.map((item: TaskItemInterface) => {
    return (
      <TaskItem title={item.title} description={item.description}></TaskItem>
    );
  });
}

export default App;
