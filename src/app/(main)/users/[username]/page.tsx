import Message from "@/components/messages/Message"
import Link from "next/link"

const page = ({params}: {params: {username: String}}) => {

  const user = {
    username: params.username,
    name: 'Santiago Navarro',
    bio: 'hola',
    followersCount: 15,
    followingCount: 3,
    messages: [
      {
      initialLetters: 'SN',
        name: 'SantiNavarro',
        username: 'santi',
        message: 'Primer Mensaje',
        repliesCount: 7
      },
      {
        initialLetters: 'SN',
        name: 'SantiNavarro',
        username: 'santi',
        message: 'Segundo mensaje',
        repliesCount: '2'
      },
      {
        initialLetters: 'SN',
        name: 'SantiNavarro',
        username: 'santi',
        message: 'Tercer mensaje',
        repliesCount: '10'
      }
    ],
    replies: [
      {
        message: 'Mi respuesta',
        repliesCount: 0
      }
    ]
  }

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="mb-8 flex-col">
        <div className="rounded-full p-6 bg-gray-400 w-20 text-center mb-4">
          <span className="font-semibold text-lg">SN</span>
        </div>
        <h2 className="mb-1">
          {user.username}
        </h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          <Link href={`/users/${user.username}`}>@{user.name}</Link>
        </div>
        <div className="mb-2">
          {user.bio}
        </div>
        <div className="flex justify-between mb-4">
          <div><span className="font-semibold">{user.followersCount} Seguidores</span></div>
          <div><span className="font-semibold">{user.followingCount} Siguiendo</span></div>
        </div>
      </section>
      <div className="flex justify-evenly mb-4">
        <div className="cursor-pointer border-b-2 border-blue4">Mensajes</div>
        <div className="cursor-pointer">Respuestas</div>
      </div>
      <div>
        {user.messages.map((i, index) => <Message key={index} message={i}/>)} 
      </div>

  
    </main>
  )
}

export default page