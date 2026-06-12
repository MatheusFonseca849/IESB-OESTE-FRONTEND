import type { TaskModel } from '../../models/TaskModel';

// 1. Usando um objeto literal com 'as const' para travar os valores
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionsWithPayload = {
  type: typeof TaskActionTypes.START_TASK;
  payload: TaskModel;
};

// Ações que NÃO DEVEM receber dados extras
export type TaskActionsWithoutPayload =
  | { type: typeof TaskActionTypes.INTERRUPT_TASK }
  | { type: typeof TaskActionTypes.RESET_STATE };

// Juntando tudo no modelo final que será exportado para o nosso Reducer
export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;