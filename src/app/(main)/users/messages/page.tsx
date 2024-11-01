import Message from "@/components/messages/Message"
import Link from "next/link"


const MessagesPage = () => {

    const messages = [
        {
        initialLetters: 'JG',
          name: 'Juana',
          username: 'juanagiovv',
          message: 'Primer Mensaje',
          repliesCount: 7
        },
        {
          initialLetters: 'IO',
          name: 'Ivan',
          username: 'elchikiwapi',
          message: 'Segundo mensaje',
          repliesCount: '2'
        },
        {
          initialLetters: 'MM',
          name: 'Miqueas',
          username: 'mike_mei',
          message: 'Tercer mensaje',
          repliesCount: '10'
        }
      ]

  return (
    <>
        <main className="flex flex-col bg-gray-200 p-8">
            <section className="mb-8 flex-col">
            {messages.map((i, index) => <Message key={index} message={i}/>)}
            </section>
        </main>
    </>
  )
}

export default MessagesPage