import React from "react";
import { Table, Container, Col, Row, Alert } from "react-bootstrap";

interface ComponentProps{
    result?:string;
    jenis?:string;
    status?:boolean;
    data?:{nama_bank:string;nomor_rekening:string;nama_pemilik:string};
}

const TableComponent:React.FC<ComponentProps>  = ({ result, jenis }) => {
    // console.log(result);
    if (result) {
        let hasil = JSON.parse(result);
        let status = hasil.success
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={12} className="mt-3">
                            <h4 className="text-center">Hasil Pencarian</h4>
                            <AlertComponent status={status} jenis={jenis} />
                            <TableData status={status} data={hasil.data} jenis={jenis} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const AlertComponent:React.FC<ComponentProps> = ({ status, jenis }) => { 
    if (status === false) {
        return (
            <div className="text-center">
                <Alert variant="danger">
                    {(jenis == "bank") ? "Nomor Rekening Tidak Ditemukan!." : "Nomor E-Wallet Tidak Ditemukan!."}
                </Alert>
            </div>
        );
    }

}
const TableData:React.FC<ComponentProps> = ({ status, data, jenis }) => {
    if (status === true) {
        return (
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>{(jenis == "bank") ? "Bank" : "E-Wallet"}</th>
                        <th>Nomor {(jenis == "bank") ? "Rekening" : "E-Wallet"}</th>
                        <th>Nama Pemilik</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                        <td>{data?.nama_bank}</td>
                        <td>{data?.nomor_rekening}</td>
                        <td>{data?.nama_pemilik}</td>
                    </tr>
                    

                </tbody>
            </Table>
        );
    }
}
export default TableComponent;