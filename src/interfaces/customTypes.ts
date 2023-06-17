import * as actionTypes from '../store/actionTypes/types';

export interface IUser {
    userId: number;
    profileImage: string;
    reputation: number;
    displayName: string;
}
export interface IFullUser {
    badge_counts: badgeCounts;
    account_id: number;
    is_employee: boolean;
    last_modified_date: number;
    last_access_date: number;
    reputation_change_year: number;
    reputation_change_quarter: number;
    reputation_change_month: number;
    reputation_change_week: number;
    reputation_change_day: number;
    reputation: number;
    creation_date: number;
    user_type: string;
    user_id: number;
    accept_rate: number;
    location: string;
    website_url: string;
    link: string;
    profile_image: string;
    display_name: string;
}

interface badgeCounts {
    bronze: number;
    silver: number;
    gold: number;
}

export interface IUsersListType {
    readonly type: typeof actionTypes.GET_USERS_LIST_SUCCESS;
    usersList: IFullUser[];
}