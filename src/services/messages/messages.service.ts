import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { httpGet } from "../common/http.service";

class MessageApi {
    getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> => 
        httpGet(`/public/messages/feed`, new URLSearchParams({page: `${page}`, size: `${size}`}))
}

const messageApi = new MessageApi()

export default messageApi