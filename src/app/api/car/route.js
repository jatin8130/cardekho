import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connection } from '@/lib/db';
import { carapi } from '@/lib/model/car';

export async function GET(){
    await mongoose.connect(connection);
    const data = await carapi.find();
    return NextResponse.json({result: data, success: 200});
}

export async function POST(request){
    await mongoose.connect(connection);
    const payload = await request.json();
    let cardata = new carapi(payload);
    const result = await cardata.save();
    return NextResponse.json({result,success: true});
}