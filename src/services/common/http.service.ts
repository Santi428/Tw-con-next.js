
export const API_URL = `http://localhost:8080/api`

export const httpGet = async <T> (endpoint: string, params?: URLSearchParams, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}`: ''}`, {
        cache: 'no-cache',
        headers: token ? {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`} : 
        {'Content-Type': 'application/json'}
    })

    if(!res.ok){
        throw new Error(`Failed to retrive: ${endpoint}`)
    }

    return res.json()
}

export const httpPost = async <T> (endpoint: string, body: object, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJpc3MiOiJzb2NpYWwtYXBpIiwiaWF0IjoxNjkxNTE2NDMwLCJ1c2VybmFtZSI6InlvZGEifQ.pg4lkBK2wlEorNrThDFqkC7l5uHrpZTJAYp4De4629c'
        },
        body: JSON.stringify(body)
    })

    if(!res.ok){
        throw new Error(`Failed to post: ${endpoint}`)
    }

    return res.json()
}

const API_URL_EXTERNAL = 'http://localhost:3000/api'

export const httpGetExternal = async <T> (endpoint: string, params?: URLSearchParams): Promise<T> => {
    const res = await fetch(`${API_URL_EXTERNAL}${endpoint}${params ? `?${params}`: ''}`, {
        cache: 'no-cache',
    })

    if(!res.ok){
        throw new Error(`Failed to retrive: ${endpoint}`)
    }

    return res.json()
}

export const httpPostExternal = async <T> (endpoint: string, body: object): Promise<T> => {
    const res = await fetch(`${API_URL_EXTERNAL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })

    if(!res.ok){
        throw new Error(`Failed to post: ${endpoint}`)
    }

    return res.json()
}