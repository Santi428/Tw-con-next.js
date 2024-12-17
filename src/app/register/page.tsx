'use client'
import authApi from "@/services/auth/auth.service"
import { useRouter } from "next/navigation"
import { useState } from "react"

type FormData = {
  username: string
  password: string
  photoUrl: string
  name: string
}

const page = () => {
  const router = useRouter()

    const [serverError, setServerError] = useState<string | null>()

    const [data, setData] = useState<FormData>({
        username: '',
        password: '',
        photoUrl: '',
        name: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setServerError(null)
        try {
            const registerResponse = await authApi.registerExternal(data.username, data.password, data.name, data.photoUrl)
            console.log(registerResponse)
            router.push('/')
        } catch (error) {
            setData({
              username: '',
              password: '',
              photoUrl: '',
              name: ''
            })
            setServerError('Sus credenciales son incorrectas')
        }
    }

  return (
    <div className="flex items-center w-full flex-col pt-4">
        <h2 className="mb-4 text-xl">Creá tu cuenta en la red social</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col">
                  <label className="mb-2">Nombre de usuario:</label>
                  <input
                      className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
                      type="text" 
                      placeholder="Anakin Skywalker"
                      onChange={(e) => setData({...data, username: e.target.value})}
                  />
              </div>

              <div className="flex flex-col mt-4">
                  <label className="mb-2">Contraseña:</label>
                  <input
                      className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
                      type="password"
                      onChange={(e) => setData({...data, password: e.target.value})}
                  />
              </div>

              <div className="flex flex-col mt-4">
                  <label className="mb-2">Nombre completo:</label>
                  <input
                      className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
                      type="text"
                      onChange={(e) => setData({...data, name: e.target.value})}
                  />
              </div>

              <div className="flex flex-col mt-4">
                  <label className="mb-2">Link a la foto:</label>
                  <input
                      className="p-4 mb-4 rounded bg-gray-50 border border-gray-200"
                      type="text"
                      onChange={(e) => setData({...data, photoUrl: e.target.value})}
                  />
              </div>

              <div className="mt-4">
                  <button className="button-primary" type='submit'>Crear cuenta</button>
              </div>

              {serverError && <h3 className='mt-4 text-lg text-red-700'>{serverError}</h3>}
          </form>
      </div>
  )
}

export default page