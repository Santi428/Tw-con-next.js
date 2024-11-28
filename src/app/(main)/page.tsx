import MessageFeed from "@/components/messages/MessageFeed"
import MessagePostForm from "@/components/messages/MessagePostForm"
import MessagePostSinHook from "@/components/messages/MessagePostSinHook"
import messageApi from "@/services/messages/messages.service"


const IndexPage = async () => {

  const messages = await messageApi.getMessageFeed(0, 10)


  return (
    <>
        <main className="flex flex-col bg-gray-200 p-8">
          <section className="mb-8 flex-col">
            {/* <MessagePostForm /> */}
            <MessagePostSinHook /> 
            <MessageFeed initialMessages={messages}/>
          </section>
        </main>
    </>
  )
}

export default IndexPage