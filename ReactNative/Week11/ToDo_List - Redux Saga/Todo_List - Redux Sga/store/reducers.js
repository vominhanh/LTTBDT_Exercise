import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
} from './actions';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;