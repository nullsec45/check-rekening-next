'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, ButtonComponent, TableComponent } from '../Utilities';
import { Spinner } from 'react-bootstrap';

interface Bank{
  nama_bank:string;
  kode_bank:string
  kategori:string;
}

interface PageProps{
  bankList:Bank[];
}

const FormCheckBank : React.FC<PageProps> = ({ bankList }) => {
    const [bank, setBank] = useState(bankList || []);
    const [accountBank, setAccountBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [jenis, setJenis] = useState("");
    const [errorAccount, setErrorAccount] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);

    const changeAccountBank = (data:string) => {
        setAccountBank(data);
    };

    const changeAccountNumber = (data:string) => {
        setAccountNumber(data);
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (accountBank.trim() === "" || accountNumber.trim() === "") {
            setErrorAccount(accountBank.trim() === "");
            setErrorNumber(accountNumber.trim() === "");
            return;
        }

        setLoading(true);
        const [jenis, codeBank] = accountBank.split("_");
        setJenis(jenis === "BANK" ? "bank" : "e-wallet");

        search(codeBank, accountNumber);
    };

    const search = (accountBank:string, accountNumber:string) => {
        axios
            .get(`/api/check-rekening`, {
                params: {
                    kode_bank: accountBank,
                    nomor_rekening: accountNumber,
                },
            })
            .then((res) => {
                setResult(JSON.stringify(res.data));
                setLoading(false);
            })
            .catch((error) => {
                alert("Error: " + error.message);
                setLoading(false);
            });
    };

    return (
        <div>
            <Input
                bank={bank}
                accountBank={accountBank}
                accountNumber={accountNumber}
                changeAccountBank={changeAccountBank}
                changeAccountNumber={changeAccountNumber}
                errorAccount={errorAccount}
                errorNumber={errorNumber}
            />
            <ButtonComponent handleSubmit={handleSubmit} />
            <SpinnerComponent loading={loading} />
            <TableComponent result={result} jenis={jenis} />
        </div>
    );
};

const SpinnerComponent = ({ loading }:{loading:boolean}) => {
    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-3">
                <Spinner animation="border" role="status"></Spinner>
            </div>
        );
    }
    return null;
};




export default FormCheckBank;
