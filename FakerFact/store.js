import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import main from './Reducers/main'
import rootReducer from './Reducers/reducer'


export default () => createStore(rootReducer, applyMiddleware(thunkMiddleware))
