import Link from "next/link"
import UsersTabs from "./UsersTabs"
import Image from 'next/image'
import userApi from "@/services/users/users.service"

type UserPageContainerProps = {
  username: string
}

const UserPageContainer = async ({username}: UserPageContainerProps) => {
    const userPromise = userApi.getUserData(username)
    const userMessagesPromise = userApi.getUserMessages(username)
    const userMessageRepliesPromise = userApi.getUserMessageReplies(username)
  
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

export default UserPageContainer