import { dbConnect } from "@/db/config";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


dbConnect()

export async function POST(req: NextRequest){
    try {
        const reqBody = await req.json()
        const { name, email, password } = reqBody 

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exist"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser =  new User({ name, email, password: hashedPassword })

        const savedUser = await newUser.save()

        return NextResponse.json(
            { message: "User created successfully",
              success: true,
              savedUser },
            { status: 201 })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}