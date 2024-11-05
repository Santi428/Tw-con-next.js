import Message from "@/components/messages/Message"
import UsersTabs from "@/components/users/UsersTabs"
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
        initialLetters: "JD",
        username: "@johnDoe",
        name: "John Doe",
        message: "Loved your recent post! It really resonated with me.",
        replieFrom: "@you"
      },
      {
        initialLetters: "AL",
        username: "@annaLee",
        name: "Anna Lee",
        message: "Great content as always. Keep it up!",
        replieFrom: "@you"
      },
      {
        initialLetters: "RS",
        username: "@ryanSmith",
        name: "Ryan Smith",
        message: "I think your points are very insightful. Looking forward to more!",
        replieFrom: "@you"
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
      <UsersTabs messages={user.messages} replies={user.replies}/>

  
    </main>
  )
}

export default page