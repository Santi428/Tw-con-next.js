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

const logout = async (sessionId: string): Promise<void> => {
    client.del(sessionId)
}

export async function POST (request: NextRequest) {

    try {
        
        const authCookie = request.cookies.get('SocialSessionID')

        if(authCookie){
            const sessionId = authCookie.value
            await logout(sessionId)
        }

        const expireDate = new Date(1970, 1, 1, 1, 1, 1);

        (await cookies()).delete('SocialSessionID');
        (await cookies()).delete('SocialUsername')

        return new Response(JSON.stringify({}), {
            status: 200,
            // headers:{'Set-Cookie': `SocialSessionID=;Expires=${expireDate.toUTCString()};Domain=localhost; HttpOnly;Path=/`}
        })
    } catch (e) {
        throw new Error('Error al hacer login ' + e)
    }
}

    