
import Message from "@/components/messages/Message"
import MessagePostSinHook from "@/components/messages/MessagePostSinHook"
import messageApi from "@/services/messages/messages.service"


const page = async ({params}: {params: {id: string}}) => {

  const messagePromise = messageApi.getMessage(params.id)

  const repliesPromise = messageApi.getMessageReplies(params.id, 0, 10)

  const[message, replies] = await Promise.all([messagePromise, repliesPromise])

  

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="mb-8 flex-col">
        <Message message={message} />
      </section>
      <section>
        <MessagePostSinHook parentId={params.id}/>
      </section>
      <section>
        {replies.content.map((i, index) => <Message key={index} message={i} />)}
      </section>
    </main>
  )
}

export default page