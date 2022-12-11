import React, { Fragment, useState } from "react"
import QRCode from "react-qr-code"
import { Container, Row, Col, Form } from "react-bootstrap"

export default function QRApp() {

    const [qrcodeValue, setQrcodeValue] = useState('')

    const onChangeHandler = ({ target }) => {
        setQrcodeValue(target.value);
    }

    return (
        <Fragment >
            <Container>
                <Container  >
                    <Row>
                        <Col xs={4}>
                            <Form.Group>
                                <Form.Label>Enter URL</Form.Label>
                                <Form.Control type="text" placeholder="enter value here" onChange={onChangeHandler} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>&nbsp;</Row>
                </Container>
                <Container>
                    <Row>&nbsp;</Row>
                </Container>
                <Container>
                    <Row>
                        <QRCode value={qrcodeValue} />
                    </Row>
                </Container>
                <Container>
                    <Row>&nbsp;</Row>
                </Container>
            </Container>

        </Fragment>
    )
}