export type TrendingUserType = {
    id:             string;
    username:       string;
    name:           string;
    photoUrl:       string;
    count:          number
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