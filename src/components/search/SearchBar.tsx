'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBar = () => {

    const router = useRouter()
    const [search, setSearch] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/hash/${search}`)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col w-full bg-gray-200 rounded-lg">
            <input 
                type="text" 
                className="p-4 my-4 mx-7 rounded bg-gray-50 border border-gray-300"
                placeholder="¿Qué estás buscando?" 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="button-primary mb-3 mx-7" type="submit">Buscar</button>
        </div>
    </form> 
  )
}

export default SearchBar