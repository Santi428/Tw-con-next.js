import { MessageType } from "@/types/message.types";
import Link from "next/link";
import Image from 'next/image'
import profilePic from '../../../public/profilepic.png'


type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {

  return (
    <div className="grid grid-cols-12">
        <div className="w-full mt-4 text-center mb-4 h-10 col-span-1 flex items-center justify-center">
            <Link href={`/users/${message.user.username}`}>
                <Image
                    className="rounded-full"
                    src={message.user.photoUrl}
                    alt="Profile Picture"
                    priority
                    width={60}
                    height={60}
                />
            </Link>
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-11">
            <div className="flex">
                {/* <Link href={`/users/${message.username}`}> */}

                    <h3>
                        {message.user.username}
                    </h3>
                    <div className="text-md ml-2 text-gray-600 cursor-pointer">
                        @{message.user.name}
                    </div>

                {/* </Link> */}

            </div>
            <p>{message.message}</p>
        </div>
    </div>
    )
}

export default Message