import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const AuthorComponent = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <p className="text-center">
                            <span>Author : <a href="https://instagram.com/fjrrama45" className="text-decoration-none">Rama Fajar</a></span> <span>Github : <a href="https://github.com/nullsec45" className="text-decoration-none">@nullsec45</a></span>
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default AuthorComponent