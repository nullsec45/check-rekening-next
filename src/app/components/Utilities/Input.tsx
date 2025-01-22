'use client';

import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Container } from "react-bootstrap";

interface InputProps{
    bank: { kategori: string; kode_bank: string; nama_bank: string }[];
    changeAccountBank: (value: string) => void;
    accountBank: string;
    accountNumber: string | number;
    changeAccountNumber: (value: string) => void;
    errorAccount: boolean;
    errorNumber: boolean;
}

const Input:React.FC<InputProps> = ({ bank, changeAccountBank, accountBank, accountNumber, changeAccountNumber, errorAccount, errorNumber }) => {
    return (
        <div>
            <Container fluid>
                <Row className="mt-2">
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bank / E-Wallet</Form.Label>
                            <Form.Select aria-label="Default select example"  value={accountBank} onChange={(event) => changeAccountBank(event.target.value)}>
                                <option>Pilih Bank / E-Wallet </option>
                                {bank && bank.map((data, index) => (
                                    <option value={`${data.kategori}_${data.kode_bank}`} key={index}> {data.nama_bank}</option>
                                ))}
                            </Form.Select>
                            <p className={(errorAccount) ? "text-danger" : "d-none"}><small>Field Bank/E-Wallet harus diisi.</small></p>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nomor Rekening / E-Wallet</Form.Label>
                            <Form.Control type="number" value={accountNumber} placeholder="Nomor rekening bank / E-wallet" onChange={(event) => changeAccountNumber(event.target.value)} />
                            <p className={(errorNumber) ? "text-danger" : "d-none"}><small>Field Nomor Rekening/E-Wallet harus diisi!.</small></p>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Input