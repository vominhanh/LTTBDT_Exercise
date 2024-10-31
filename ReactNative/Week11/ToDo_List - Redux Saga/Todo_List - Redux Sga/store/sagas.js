import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTasksSuccess,
  fetchTasksFailure,
  addTaskSuccess,
  addTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskSuccess,
  updateTaskFailure,
  FETCH_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
} from './actions';

const API_URL = 'https://6626f906b625bf088c0705c3.mockapi.io/todo_list';

function* fetchTasks() {
  try {
    const response = yield call(fetch, API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* addTask(action) {
  try {
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(addTaskSuccess(data));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

function* deleteTask(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    yield put(deleteTaskFailure(error.message));
  }
}

function* updateTask(action) {
  try {
    const response = yield call(fetch, `${API_URL}/${action.payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(updateTaskSuccess(data));
  } catch (error) {
    yield put(updateTaskFailure(error.message));
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeLatest(ADD_TASK_REQUEST, addTask);
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
  yield takeLatest(UPDATE_TASK_REQUEST, updateTask);
}