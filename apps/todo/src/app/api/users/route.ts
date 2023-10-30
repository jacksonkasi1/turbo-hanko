import users from './data.json'
import { NextResponse } from 'next/server'

export async function GET(req: any) {
    return NextResponse.json(users)
}

export async function POST(req: any) {
    const user = req.query
    
    return NextResponse.json(user)
}