import { PaginationType } from "./pagination.types";

export type TrendingUserType = {
    id:             string;
    username:       string;
    name:           string;
    photoUrl:       string;
    followersCount: number
}

export type UserType = {
    id:             string;
    username:       string;
    name:           string;
    bio:            string;
    photoUrl:       string;
    createdAt:      string;
    followersCount: number;
    followingCount: number;
    messageCount:   number;
}

export type TrendingUserRes = {
    users: TrendingUserType[]
    pagination: PaginationType
}