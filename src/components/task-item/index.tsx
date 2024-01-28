import { Box, Chip, Divider, Typography } from "@mui/material";
import "./task-item.scss";
import { COLORS, TASK_STATUS } from "../../common/enums";
type Props = {
  task: {
    title: string;
    description: string;
    status: `${TASK_STATUS}`;
    tags: string[];
  };
};
const TaskItem = ({ task: { title, description, status, tags } }: Props) => {
  return (
    <Box className="wrapper" sx={{ backgroundColor: COLORS[status] }}>
      <Box className="header">
        <Typography variant="h6">{title}</Typography>
        {/* <Typography variant="caption">icon</Typography> */}
        {status ? (
          <Chip
            className="chip"
            label={TASK_STATUS[status].replace("_", " ")}
          ></Chip>
        ) : null}
      </Box>
      <Divider></Divider>
      <Box className="content">
        <Box>
          {tags && tags.length
            ? tags.map((tag: string, index: number) => {
                return <Chip key={index} className="chip" label={tag}></Chip>;
              })
            : null}
        </Box>
      </Box>
      <Box className="footer">
        <Typography>Footer</Typography>
      </Box>
    </Box>
  );
};

export default TaskItem;
