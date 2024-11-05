"use client"
import { MessageType } from "@/types/message.types"
import Message from "../messages/Message"
import { useState } from "react"
import { ReplieType } from "@/types/replie.type"


type UserTabsProps = {
    messages: MessageType[],
    replies: ReplieType[]
}

enum TabView {
    MESSAGES, REPLIES
}

const UsersTabs = ({messages, replies}: UserTabsProps) => {

    const [tab, setTab] = useState<TabView>(TabView.MESSAGES)

  return (
    <>
        <div className="flex justify-evenly mb-4">
            <div
             className={`cursor-pointer ${tab === TabView.MESSAGES && 'border-b-4 border-blue-400'}`}
             onClick={() => setTab(TabView.MESSAGES)}
            >
                Mensajes
            </div>
            <div 
            className={`cursor-pointer ${tab === TabView.REPLIES && 'border-b-4 border-blue-400'}`}
            onClick={() => setTab(TabView.REPLIES)}
            >
                Respuestas
            </div>
        </div>
        <div>
            {tab === TabView.MESSAGES && messages.map((i, index) => <Message key={index} message={i}/>)} 
            {tab === TabView.REPLIES && replies.map((i, index) =><Message key={index} message={i} />)}
        </div>
    </>
  )
}

export default UsersTabs