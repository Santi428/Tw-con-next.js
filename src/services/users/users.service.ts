import { UserType } from "@/types/user.types";
import { httpGet, httpGetExternal } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class UserApi {

    getMe = async (token: string): Promise<UserType> => httpGet('/me', undefined, token)
        
    getUserData = async (username: string): Promise<UserType> => httpGet(`/public/users/${username}`)

    getUserMessages = async (username : string): Promise<PageType<MessageType>> => httpGet(`/public/users/${username}/messages`)

    getUserMessageReplies = async (username : string): Promise<PageType<MessageType>> => httpGet(`/public/users/${username}/messages/replies`)
}

const userApi = new UserApi()

export default userApi