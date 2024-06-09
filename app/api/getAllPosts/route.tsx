import { createDirectus, readItems, rest, staticToken } from '@directus/sdk';
import { NextResponse } from 'next/server';
const client = createDirectus(process.env.DIRECTUS_ENDPOINT || "").with(staticToken(process.env.DIRECTUS_KEY || "")).with(rest());
export async function GET() {
    try {
        const data = await client.request(readItems('posts'));
        return NextResponse.json({data: data});
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}