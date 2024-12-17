import { cookies, headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import authApi from "./services/auth/auth.service";



export async function middleware(request: NextRequest) {

    const cookieStore = cookies()

    try{
        
        const sessionId = (await cookieStore).get('SocialSessionID')?.value ?? ''

        const accessToken = await getAccessToken(sessionId)
    
        if(!accessToken) return NextResponse.redirect(new URL('/login', request.url))

        return getAuthenticationHeaders(request, accessToken)
    } catch(e){
        return NextResponse.redirect(new URL('/login', request.url))
    } 
}

const getAccessToken = async (sessionId: string):Promise<string> => {
    const accessToken = (await authApi.getRedisValue(sessionId)).value
    // console.log(`Token: ${accessToken}`)

    return accessToken
} 

const getAuthenticationHeaders = (request: NextRequest, accessToken: string) => {
    const requestHeaders = new Headers(request.headers)

    requestHeaders.set('x-social-access-token', accessToken)
    // console.log(`headers seteados con el aT: ${accessToken}`)

    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
}

export const config = {
    matcher: '/profile'
}