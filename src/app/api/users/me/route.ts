import { dbConnect } from '@/db/config'
import { getTokenData } from '@/helpers/getTokenData'
import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/userModel'

dbConnect()

export async function GET( request: NextRequest ) {
    
    try {
        const userId = getTokenData(request)

        const user = await User.findById(userId).select("-password")

        return NextResponse.json(user)
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}


