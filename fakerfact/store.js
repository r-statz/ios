import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import main from './Reducers/main'
import rootReducer from './Reducers/reducer'


export default () => createStore(rootReducer, applyMiddleware(thunkMiddleware))
