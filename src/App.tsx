import { Box, Container } from "@mui/material";
import "./App.css";
import { TaskItemInterface } from "./common/interfaces";
import TaskItem from "./components/task-item";
import { TASK_STATUS } from "./common/enums";

function App() {
  const items: TaskItemInterface[] = [
    {
      _id: "1",
      title: "task 1",
      description: "this is task 1",
      tags: [
        "tag1",
        "tag2",
        "tag1",
        "tag2",
        "tag1",
        "tag2",
        "tag1",
        "tag2",
        "tag1",
        "tag2",
        "tag1",
        "tag2",
        "tag1",
        "tag2",
      ],
      status: TASK_STATUS.COMPLETE,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "task 2",
      description: "this is task 2",
      status: TASK_STATUS.IN_PROGRESS,
      tags: ["tag1", "tag2"],
      createdAt: new Date(),
    },
    {
      _id: "3",
      title: "task 3",
      description: "this is task 3",
      status: TASK_STATUS.IN_REVIEW,
      tags: ["tag1", "tag2"],
      createdAt: new Date(),
    },
    {
      _id: "4",
      title: "task 4",
      description: "this is task 4",
      status: TASK_STATUS.HOLD,
      tags: ["tag1", "tag2"],
      createdAt: new Date(),
    },
  ];

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {items.map((item: TaskItemInterface) => {
          return <TaskItem key={item._id} task={item}></TaskItem>;
        })}
      </Box>
    </Container>
  );
}

export default App;
