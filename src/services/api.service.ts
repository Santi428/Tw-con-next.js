import { MessageType } from "@/types/message.types"
import { PageType } from "@/types/pagination.types"
import { UserType } from "@/types/user.types"

const API_URL = `http://localhost:8080/api`

export const getUserData = async (username: string): Promise<UserType> => {
    const res = await fetch(`${API_URL}/public/users/${username}`)
  
    if(!res.ok){
      throw new Error('Failed to retrieve users')
    }
  
    return res.json()
}

export const getUserMessages = async (username : string): Promise<PageType<MessageType>> => {
    const res = await fetch(`${API_URL}/public/users/${username}/messages`)
  
    if(!res.ok){
      throw new Error('Failed to retrieve user Messages')
    }

    return res.json()
}

export const getUserMessageReplies = async (username : string): Promise<PageType<MessageType>> => {
    const res = await fetch(`${API_URL}/public/users/${username}/messages/replies`)
  
    if(!res.ok){
      throw new Error('Failed to retrieve user Replies')
    }

    return res.json()
}