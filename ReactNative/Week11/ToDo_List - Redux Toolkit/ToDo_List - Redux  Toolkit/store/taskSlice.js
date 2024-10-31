import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksRequest = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://6626f906b625bf088c0705c3.mockapi.io/todo_list');
  return response.json();
});

export const addTaskRequest = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await fetch('https://6626f906b625bf088c0705c3.mockapi.io/todo_list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask),
  });
  return response.json();
});

export const updateTaskRequest = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await fetch(`https://6626f906b625bf088c0705c3.mockapi.io/todo_list/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task),
  });
  return response.json();
});

export const deleteTaskRequest = createAsyncThunk('tasks/deleteTask', async (id) => {
  await fetch(`https://6626f906b625bf088c0705c3.mockapi.io/todo_list/${id}`, {
    method: 'DELETE',
  });
  return id; // Trả về id để xóa khỏi state
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasksRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasksRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTaskRequest.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTaskRequest.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        state.tasks[index] = action.payload;
      })
      .addCase(deleteTaskRequest.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

export const taskReducer = taskSlice.reducer;