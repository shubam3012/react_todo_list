import { TASK_STATUS } from "./enums";

export interface TaskItemInterface {
  _id: string;
  title: string;
  description: string;
  status: `${TASK_STATUS}`;
  tags: string[];
}
