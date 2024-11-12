import UsersTabs from "@/components/users/UsersTabs"
import { getUserData, getUserMessageReplies, getUserMessages } from "@/services/api.service"
import Image from 'next/image'
import Link from "next/link"





const page = async ({params}: {params: {username: string}}) => {

  const userPromise = getUserData(params.username)
  const userMessagesPromise = getUserMessages(params.username)
  const userMessageRepliesPromise = getUserMessageReplies(params.username)

  const [user, userMessages, userMessageReplies] = await Promise.all([userPromise, userMessagesPromise, userMessageRepliesPromise])

  return (
    <main className="flex flex-col bg-gray-200 p-8">
      <section className="mb-8 flex-col">
        <div className="text-center mb-4 block relative w-20 h-20">
          <Image
            className="rounded-full"
            src={user.photoUrl}
            alt="Profile Picture"
            fill
            priority
            sizes="10vw"
            />
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
      <UsersTabs messages={userMessages.content} replies={userMessageReplies.content}/>

  
    </main>
  )
}

export default page