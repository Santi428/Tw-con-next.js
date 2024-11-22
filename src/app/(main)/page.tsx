import MessageFeed from "@/components/messages/MessageFeed"
import messageApi from "@/services/messages/messages.service"


const IndexPage = async () => {

  const messages = await messageApi.getMessageFeed(0, 10)


  return (
    <>
        <main className="flex flex-col bg-gray-200 p-8">
          <section className="mb-8 flex-col">
            <MessageFeed initialMessages={messages}/>
          </section>
        </main>
    </>
  )
}

export default IndexPage