import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './reducers';
import { rootSaga } from './sagas';

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Kết hợp các reducer
const rootReducer = combineReducers({
  taskReducer,
});

// Tạo store với middleware
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Chạy saga
sagaMiddleware.run(rootSaga);

export default store;