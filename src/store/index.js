import { createStore, combineReducers } from 'redux'
import articleReducer from '../reducer/articleReducer';
import searchReducer from '../reducer/searchReducer';

const rootReducer = combineReducers({
  articlesState: articleReducer,
  searchState: searchReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());