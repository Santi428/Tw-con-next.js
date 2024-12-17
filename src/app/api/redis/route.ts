import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const client = createClient({
    url: 'redis://default:Social_Network_Pass@localhost:6379'
});

client.connect().then(() => {
    console.log('BD redis conectada')
})


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key') ?? '';

    return NextResponse.json({value: await client.get(key)});
}
