import { Avatar, AvatarGroup, Box, Chip, Divider, Typography } from "@mui/material";
import "./task-item.scss";
import { COLORS, TASK_STATUS } from "../../common/enums";
import { lightBlue, lightGreen, orange, purple, red } from "@mui/material/colors";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
type Props = {
  task: {
    title: string;
    description: string;
    status: `${TASK_STATUS}`;
    tags: string[];
  };
};
const TaskItem = ({ task: { title, status, tags } }: Props) => {
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
        <Box>
        <AvatarGroup  max={3}>
          <Avatar sx={{ bgcolor: red[500], width:40, height:40}}>SS</Avatar>
          <Avatar sx={{ bgcolor: orange[500], width:40, height:40 }}>RP</Avatar>
          <Avatar sx={{ bgcolor: purple[500], width:40, height:40 }}>NS</Avatar>
          <Avatar sx={{ bgcolor: lightBlue[500], width:40, height:40 }}>MG</Avatar>
          <Avatar sx={{ bgcolor: lightGreen[500], width:40, height:40 }}>RS</Avatar>
        </AvatarGroup>
        </Box>
        
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider> */}
      </Box>
    </Box>
  );
};

export default TaskItem;
