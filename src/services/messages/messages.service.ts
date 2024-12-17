import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { httpGet, httpPost } from "../common/http.service";

class MessageApi {
    getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> => 
        httpGet(`/public/messages/feed`, new URLSearchParams({page: `${page}`, size: `${size}`}))


    getMessageReplies = async (id: string, page: number, size: number): Promise<PageType<MessageType>> => 
        httpGet(`/public/messages/${id}/replies`, new URLSearchParams({page: `${page}`, size: `${size}`}))

    getMessageByHash = async (hash: string): Promise<PageType<MessageType>> => 
        httpGet(`/public/messages/hash/${hash}`)


    getMessage = async (id: string): Promise<MessageType> => 
        httpGet(`/public/messages/${id}`)


    postMessage = async (message: string, parentId?: string): Promise<MessageType> =>
        httpPost('/messages', {message: message, parentId: parentId ?? null})
}

const messageApi = new MessageApi()

export default messageApi