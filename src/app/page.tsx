import React from 'react'
import { AuthorComponent } from '@/app/components/Utilities'
import FormCheckBank from '@/app/components/FormCheckBank';
import axios from 'axios';

interface Bank {
    nama_bank: string;
    kode_bank: string;
    kategori: string;
}

interface ApiResponse {
    data:{
        banks:Bank[]
    };
    success:boolean;
    message:string;
}

const Page =async  () => {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/checker?action=getBankList&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const bankList = response.data.data.banks;

  return (
    <div>
            <h4 className="text-center mt-5 fw-bold">Cek Pemilik Rekening / E-Wallet</h4>
            <AuthorComponent />
            <FormCheckBank bankList={bankList}/>
    </div>
  )
}

export default Page
