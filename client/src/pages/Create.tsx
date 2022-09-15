// @ts-nocheck
import { useState } from 'react';
import { Container, Row, Col, Accordion, Alert } from 'react-bootstrap';
import { DeploySmartContractForm } from '../components/forms/DeploySmartContractForm';
import { NewProjectForm } from '../components/forms/NewProjectForm';
import { UploadPinataForm } from '../components/forms/UploadPinataForm';

export const Create = () => {
    const [alerts, setAlerts] = useState([]);

    const setInfo = (item) => {
        setAlerts([...alerts, item])
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Alert variant="info" className="mt-3">
                        <Alert.Heading>Information Board</Alert.Heading>
                        {alerts.length === 0 && <p>No data available yet</p>}
                        {alerts.length > 0 && <ul>
                            {alerts.map((item, index) => (
                                <li key={index}>{`${item.key}: ${item.value}`}</li>
                            ))}
                        </ul>}
                    </Alert>
                    <Accordion defaultActiveKey="0" className="mt-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>1. Deploy Smart Contract</Accordion.Header>
                            <Accordion.Body>
                                <DeploySmartContractForm setInfo={setInfo} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2. Create New Project</Accordion.Header>
                            <Accordion.Body>
                                <NewProjectForm setInfo={setInfo} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>3. Upload Image/Metadata to Pinata</Accordion.Header>
                            <Accordion.Body>
                                <UploadPinataForm />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>4. Create New Collection</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>5. Create Metadata Schema</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>6. Mint NFT</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}
