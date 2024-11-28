'use client'
import { MessageType } from "@/types/message.types";
import { useRouter } from "next/navigation";
import RepliesCounter from "../counters/RepliesCounter";
import UserCard, { UserCardLayout } from "../users/UserCard";


type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {

    const router = useRouter()

    return <UserCard user={message.user} layout={UserCardLayout.HORIZONTAL}>
            <div className="flex flex-col">
                <p>{message.message}</p>
                <div className="flex justify-end pt-2">
                    <RepliesCounter count={message.repliesCount} onclick={() => router.push(`/users/messages/${message.id}`)}/>
                </div>
            </div>
        </UserCard>
}

export default Message