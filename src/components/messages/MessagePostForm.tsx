'use client'
import messageApi from "@/services/messages/messages.service"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"


type FormData = {
  message: string
}



const MessagePostForm = () => {

  const {register, handleSubmit} = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const response = await messageApi.postMessage(data.message)
    console.log(data)
  }

  return (
        <div className="grid grid-cols-12 pb-5 mb-4">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                  rows={4}  
                  placeholder="¿Qué estás pensando?" 
                  className="resize-none w-full p-2 mb-4 rounded bg-gray-50 border-gray-200"
                  {...register('message'), {
                    required: true
                  }}
                />
                <div className="flex justify-end">
                  <button className="button-primary" onClick={handleSubmit(onSubmit)}>Postear</button>
                </div>
              </form>
            </div>
        </div>
  )
}

export default MessagePostForm