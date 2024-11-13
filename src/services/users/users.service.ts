import { UserType } from "@/types/user.types";
import { httpGet } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class UserApi {
    getUserData = async (username: string): Promise<UserType> => httpGet(`/public/users/${username}`)

    getUserMessages = async (username : string): Promise<PageType<MessageType>> => httpGet(`/public/users/${username}/messages`)

    getUserMessageReplies = async (username : string): Promise<PageType<MessageType>> => httpGet(`/public/users/${username}/messages/replies`)
}

const userApi = new UserApi()

export default userApi