'use client'
import authApi from '@/services/auth/auth.service'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useState } from 'react'

type FormData = {
    username: string
    password: string
}

const LoginForm = () => {

    const router = useRouter()

    const [serverError, setServerError] = useState<string | null>()

    const [data, setData] = useState<FormData>({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setServerError(null)
        try {
            const loginResponse = await authApi.login(data.username, data.password)
            router.push('/')
            router.refresh()
        } catch (error) {
            setServerError('Sus credenciales son incorrectas')
        }
    }

  return (
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

            <div className="mt-4">
                <button className="button-primary" type='submit'>Iniciar sesión</button>
            </div>
            {serverError && <h3 className='mt-4 text-lg text-red-700'>{serverError}</h3>}
        </form>
  )
}

export default LoginForm