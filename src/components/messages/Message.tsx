import { MessageType } from "@/types/message.types";
import Link from "next/link";


type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {

   
    
  return (
    <div className="flex">
        <div className="rounded-full p-5 bg-gray-400 w-16 text-center mb-4">
            <Link href={`/users/${message.username}`}>
                <span className="font-semibold text-sm">{message.initialLetters}</span>
            </Link>
        </div>
        <div className="flex flex-col ml-4 mt-2">
            <div className="flex">
                {/* <Link href={`/users/${message.username}`}> */}

                    <h3>
                        {message.username}
                    </h3>
                    <div className="text-md ml-2 text-gray-600 cursor-pointer">
                        @{message.name}
                    </div>

                {/* </Link> */}

            </div>
            <p>{message.message}</p>
        </div>
    </div>
    )
}

export default Message