import type { TaskStateModel } from './TaskStateModel.ts';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number | Date;
  completeDate: number | Date | null;
  interruptDate: number | Date | null;
  type: keyof TaskStateModel['config'];
};