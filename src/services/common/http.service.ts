export const API_URL = `http://localhost:8080/api`

export const httpGet = async <T> (endpoint: string, params?: URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}`: ''}`)

    if(!res.ok){
        throw new Error(`Failed to retrive: ${endpoint}`)
    }

    return res.json()
}