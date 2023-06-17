import { combineReducers } from 'redux';
import { UsersList } from './usersList';

const rootReducer = combineReducers({
    usersList: UsersList
})
export default rootReducer

export type ApplicationState = ReturnType<typeof rootReducer>