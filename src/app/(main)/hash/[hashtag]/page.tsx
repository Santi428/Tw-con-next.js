import Message from "@/components/messages/Message"
import MessageHashtag from "@/components/messages/MessageHashtag"
import messageApi from "@/services/messages/messages.service"


const MessageHashList = async ({params}: {params: {hashtag: string}}) => {

    const messages = await messageApi.getMessageByHash(params.hashtag)

    console.log(messages)

    return <section>
        {messages.content.map((i, index) => <Message key={index} message={i}/>)}
    </section>
}

export default MessageHashList