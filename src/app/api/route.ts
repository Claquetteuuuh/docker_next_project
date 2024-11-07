import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.CLAQUETTEUUUH_API_KEY;

    if (!apiUrl || !apiKey) {
        return NextResponse.json({ error: "Env variable not found" }, { status: 500 });
    }

    try {
        const response = await axios.get(`${apiUrl}/V1/hello`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return NextResponse.json(response.data, { status: 200 });
    } catch (err){
        console.error(err)
        return NextResponse.json({ message: "Cannot fetch API" }, { status: 400 });
    }
}
