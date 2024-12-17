import { LoginResponseType, RedisResponseType, RegisterResponseType } from "@/types/auth.types"
import { httpGetExternal, httpPost, httpPostExternal } from "../common/http.service"


class AuthApi {

    getRedisValue = async (key: string): Promise<RedisResponseType> => 
        httpGetExternal('/redis', new URLSearchParams({key: key}))

    login = async (username: string, password: string): Promise<LoginResponseType> => 
        httpPostExternal('/auth/login', {username: username, password: password}) 

    loginInternal = async (username: string, password: string): Promise<LoginResponseType> => 
        httpPost('/public/auth/login', {username: username, password: password}) 

    registerInternal = async (username: string, password: string, name: string, photoUrl: string): Promise<RegisterResponseType> =>
        httpPost('/public/auth/register', {username, password, name, photoUrl})

    registerExternal = async (username: string, password: string, name: string, photoUrl: string): Promise<RegisterResponseType> => 
        httpPostExternal('/auth/register', {username, password, name, photoUrl})

    logout = async (): Promise<void> => 
        httpPostExternal('/auth/logout', {})

}

const authApi = new AuthApi()

export default authApi