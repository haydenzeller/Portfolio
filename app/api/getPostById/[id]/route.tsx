
// get post by id
import { createDirectus, staticToken, rest, readItem } from "@directus/sdk";
import { NextRequest, NextResponse } from "next/server";
const client = createDirectus(process.env.DIRECTUS_ENDPOINT || "").with(staticToken(process.env.DIRECTUS_KEY || "")).with(rest());
type Params = {
    id:string;
}
export async function GET(context: NextRequest, {params}: {params: Params}) {
    try {
        const data = await client.request(readItem('posts', params.id));
        return NextResponse.json({ data: data });
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
