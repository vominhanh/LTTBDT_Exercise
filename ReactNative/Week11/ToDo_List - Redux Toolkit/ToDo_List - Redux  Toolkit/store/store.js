import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './taskSlice'; // Đảm bảo đúng đường dẫn

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Xuất store
export default store;