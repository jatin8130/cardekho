import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {connection} from '@/lib/db';
import { carapi } from '@/lib/model/car';

export async function PUT(request, content){
    await mongoose.connect(connection);
    const productid = content.params.carid;
    const filter = {_id:productid}
    const payload = await request.json();
    const result = await carapi.findOneAndUpdate(filter, payload);
    return NextResponse.json({result, success:true});
}

export async function GET(request, content){
    await mongoose.connect(connection);
    const productid = content.params.carid;
    const filter = {_id:productid}
    const result = await carapi.findById(filter);
    return NextResponse.json({result, success:true});
}

export async function DELETE(request, content){
    await mongoose.connect(connection);
    const productid = content.params.carid;
    const filter = {_id:productid}
    const record = await carapi.deleteOne(filter);
    return NextResponse.json({result: record, success:true});
}