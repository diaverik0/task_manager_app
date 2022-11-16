// simple comment on this one line

import { createStore } from 'redux';
import { taskReducer } from './features/taskList';

export const store = createStore(taskReducer);