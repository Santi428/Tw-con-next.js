'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import messageApi from "@/services/messages/messages.service"

type MessagePostSinHookProps = {
    parentId?: string
}


const MessagePostSinHook = ({parentId}: MessagePostSinHookProps) => {

    const [post, setPost] = useState('')

    const handleChange = (e: string) => {
        setPost(e)
    } 

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(post.length > 0){
            const response = await messageApi.postMessage(post, parentId)
            location.reload()
            console.log(response)
        }
    }

  return (
    <div className="mb-4">
        <div className="grid grid-cols-12 pb-5">
            <div className="w-full h-full mt-2 mb-2 col-span-1 flex items-center justify-center">
                <Link href={`/users`}>
                    <Image
                        className="rounded-full"
                        src='https://i.pinimg.com/564x/62/ce/55/62ce5561877ab6a4587a2b7dedd4c5ca.jpg'
                        alt="Profile Picture"
                        priority
                        width={60}
                        height={60}
                    />
                </Link>
            </div>
            <div className="flex flex-col ml-4 mt-2 col-span-11">
                <form onSubmit={(e) => onSubmit(e)}>
                    <textarea
                        rows={4}  
                        placeholder="¿Qué estás pensando?" 
                        className="resize-none w-full p-2 mb-4 rounded bg-gray-50 border-gray-200"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <div className="flex justify-end">
                        <button className="button-primary" type='submit'>Postear</button>
                    </div>
                </form>
            </div>
        </div>
  </div>
  )
}

export default MessagePostSinHook