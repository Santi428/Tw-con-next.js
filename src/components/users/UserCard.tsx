import { TrendingUserType, UserType } from "@/types/user.types"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"

type UserCardProps = PropsWithChildren & {
    user: TrendingUserType | UserType
    layout: UserCardLayout
}

export enum UserCardLayout{
    HORIZONTAL,
    VERTICAL
}

const divClasses = {
    [UserCardLayout.HORIZONTAL]: 'flex',
    [UserCardLayout.VERTICAL]: 'flex flex-col'
}

const linkClasses = {
    [UserCardLayout.HORIZONTAL]: "text-md ml-2 text-gray-600 cursor-pointer",
    [UserCardLayout.VERTICAL]: "text-md text-gray-600 cursor-pointer"
}

const UserCard = ({user, layout, children}: UserCardProps) => {


  return (
    <div className="grid grid-cols-12">
        <div className="w-full h-full mt-2 mb-2 col-span-1 flex items-center justify-center">
            <Link href={`/users/${user.username}`}>
                <Image
                    className="rounded-full"
                    src={user.photoUrl}
                    alt="Profile Picture"
                    priority
                    width={60}
                    height={60}
                />
            </Link>
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-11">
            <Link href={`/users/${user.username}`}>
                <div className={divClasses[layout]}>
                    <h3>
                        {user.username}
                    </h3>
                    <div className={linkClasses[layout]}>
                        @{user.name}
                    </div>
                </div>
                {children}
            </Link>
        </div>
    </div>
  )
}

export default UserCard