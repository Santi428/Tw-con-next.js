import authApi from "@/services/auth/auth.service";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "redis";
import { v4 as uuidv4 } from "uuid";

const client = createClient({
    url: 'redis://default:Social_Network_Pass@localhost:6379'
})

client.connect().then(() => {
    console.log('BD redis conectada')
})

const TEN_MINUTES = 60 * 10

export async function POST (request: NextRequest) {

    try {
        const {username, password} = await request.json();
        const loginResponse = await authApi.loginInternal(username, password)

        const sessionId = uuidv4()

        client.set(sessionId, loginResponse.accessToken, {EX: TEN_MINUTES})
        // console.log(`Usuario: ${loginResponse.user} registrado en redis, con el token: ${loginResponse.accessToken}`)

        const now = new Date()

        const expireAt = new Date(now.getTime() + TEN_MINUTES * 1000).getTime()


        const authCookie = `SocialSessionID=${sessionId}; Expires=${expireAt}; Domain=localhost; Secure; HttpOnly; Path=/`
        const usernameCookie = `SocialUsername=${loginResponse.user.username}; Expires=${expireAt}; Domain=localhost;Path=/`;

        (await cookies()).set('SocialSessionID', sessionId, {
            expires: expireAt,
            httpOnly: true,
            secure: true,
            domain: 'localhost',
            path: '/'
        });
        
        (await cookies()).set('SocialUsername', loginResponse.user.username, {
            expires: expireAt,
            httpOnly: false,
            secure: true,
            domain: 'localhost',
            path: '/'
        });
        
        
        return new Response(JSON.stringify(loginResponse.user), {
            status: 200,
            // headers:{'Set-Cookie': authCookie}
        })
    } catch (e) {
        throw new Error('Error al hacer login ' + e)
    }
}

    