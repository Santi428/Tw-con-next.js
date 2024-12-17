import { RegisterResponseUserType, UserType } from "./user.types"

export type LoginResponseType = {
    accessToken: string
    user: UserType
} 

export type RedisResponseType = {
    value: string
}

export type RegisterResponseType = {
    accessToken: string
    user: RegisterResponseUserType
}