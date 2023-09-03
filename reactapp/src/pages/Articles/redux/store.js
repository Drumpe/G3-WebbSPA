// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import topicSortReducer from './topicSortSlice';
import searchForReducer from '../../../components/Navbar/Search/SearchForSlice'

const rootReducer = combineReducers({
    topicSort: topicSortReducer,
    searchFor: searchForReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;