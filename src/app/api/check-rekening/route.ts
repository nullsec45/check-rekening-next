import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export  async function GET(req:NextRequest) {
    const { searchParams } = new URL(req.url);
    const kode_bank = searchParams.get('kode_bank');
    const nomor_rekening = searchParams.get('nomor_rekening');

     if (!kode_bank || !nomor_rekening) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/checker`, {
            params: {
                action: "getAccount",
                kode_bank,
                nomor_rekening,
                apikey: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        return NextResponse.json(response.data,{status:200});
    } catch (error: any) {
        return  NextResponse.json({ error: error.message,status:500 });
    }

    
}