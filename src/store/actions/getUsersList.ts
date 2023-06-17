
import * as api from '../../api';
import { IUsersListType } from '../../interfaces/customTypes';
import { Dispatch } from 'react';
import * as actionTypes from '../actionTypes/types';

interface IGetUsersListError {
  readonly type: typeof actionTypes.GET_USERS_LIST_ERROR;
  error?: string;
}

interface IGetUsersListRequest {
  readonly type: typeof actionTypes.GET_USERS_LIST_REQUEST;
}

export type GetUsersListAction =
  | IUsersListType
  | IGetUsersListError
  | IGetUsersListRequest

export const getUsersList = () => async (dispatch: Dispatch<GetUsersListAction>) => {
  try {
    dispatch({
      type: actionTypes.GET_USERS_LIST_REQUEST,
    });

    const response: any = await api.GetUsersList();

    dispatch({
      type: actionTypes.GET_USERS_LIST_SUCCESS,
      usersList: response,
    });

  } catch (error: any) {
    dispatch({
      type: actionTypes.GET_USERS_LIST_ERROR,
      error: error.message,
    });
  }
};
