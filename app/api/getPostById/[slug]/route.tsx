
// get post by id
import { createDirectus, staticToken, rest, readItem, readItems } from "@directus/sdk";
import { NextRequest, NextResponse } from "next/server";
const client = createDirectus(process.env.DIRECTUS_ENDPOINT || "").with(staticToken(process.env.DIRECTUS_KEY || "")).with(rest());
type Params = {
    slug:string;
}
export async function GET(context: NextRequest, {params}: {params: Params}) {
    try {
        const data = await client.request(readItems('posts', {
            filter: {
                title: params.slug,
            },
        }));
            
        return NextResponse.json({ data: data });
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
