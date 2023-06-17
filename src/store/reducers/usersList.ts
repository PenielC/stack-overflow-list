import produce from 'immer';
import * as actionType from '../actionTypes/types';
import { GetUsersListAction } from '../actions/getUsersList';
import { IFullUser } from '../../interfaces/customTypes';

export interface IUsersListReducer {
  loading?: boolean;
  error?: string;
  usersList: IFullUser[];
}

export const UsersList = produce(
  (draft: IUsersListReducer, action: GetUsersListAction): IUsersListReducer => {
    switch (action.type) {
      case actionType.GET_USERS_LIST_REQUEST:
        draft.loading = true;
        return draft;
      case actionType.GET_USERS_LIST_SUCCESS:
        draft.usersList = action.usersList;
        draft.loading = false;
        return draft;
      case actionType.GET_USERS_LIST_ERROR:
        draft.error = action.error;
        return draft;
      default:
        return draft;
    }
  },
  {
    loading: false
  }
);
