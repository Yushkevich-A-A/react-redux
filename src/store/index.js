import { createStore, combineReducers } from "redux";
import taskListReducer from "../reducers/taskListReducer/taskListReducer";
import addTaskReducer from "../reducers/addTaskReducer/addTaskReducer";

const reducer = combineReducers({
    taskList: taskListReducer,
    addTask: addTaskReducer,
})

const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;