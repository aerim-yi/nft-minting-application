import { useState, useEffect } from 'react';
import { getUserProjects } from '../api/projects-api';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Project, signRaw } from '@imtbl/core-sdk';
import { ethers } from 'ethers';

export const View = () => {
    const [projects, setProjects] = useState<Project[]>()


    useEffect(() => {
        const getSinger = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []); //@TODO: ask Calvin why (https://stackoverflow.com/questions/71198438/ethers-js-error-unknown-account-0-operation-getaddress-code-unsupported-o)
            const signer = provider.getSigner();  //get Signature from Metamask wallet

            const timestamp = Math.floor(Date.now() / 1000).toString();
            const signature = await signRaw(timestamp, signer); // IMX-Signature

            const response = await getUserProjects(signature, timestamp)
            if (response) setProjects(response.result)
        }
        getSinger()
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <h3>My Projects</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th rowSpan={2}>id</th>
                                <th rowSpan={2}>Company</th>
                                <th colSpan={2}>Collection</th>
                                <th colSpan={2}>Mint</th>
                            </tr>
                            <tr>
                                <th>Montly Limit</th>
                                <th>Remaining</th>
                                <th>Montly Limit</th>
                                <th>Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {projects && projects.map((project) => {
                                    return (
                                        <tr>
                                            <td>{project.id}</td>
                                            <td>{project.name}</td>
                                            <td>{project.collection_monthly_limit}</td>
                                            <td>{project.collection_remaining}</td>
                                            <td>{project.mint_monthly_limit}</td>
                                            <td>{project.mint_remaining}</td>
                                        </tr>
                                    )
                                })}
                                {!projects &&
                                    <h5>Loading...</h5>
                                }
                            </>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
