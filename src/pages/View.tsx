import { useState, useEffect } from 'react';
import { getUserProjects } from '../api/projects-api';
import { getUserAssets } from '../api/assets-api'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Project, signRaw, Asset } from '@imtbl/core-sdk';
import { ethers } from 'ethers';
import placeholderImg from '../asset/placeholderImg.png'

export const View = () => {
    const wallet = localStorage.WALLET_ADDRESS
    const [projects, setProjects] = useState<Project[]>()
    const [assets, setAssets] = useState<Asset[]>()


    useEffect(() => {
        const getSinger = async () => {
            //get Signature from Metamask wallet
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []); //@TODO: ask Calvin why (https://stackoverflow.com/questions/71198438/ethers-js-error-unknown-account-0-operation-getaddress-code-unsupported-o)
            const signer = provider.getSigner();

            const timestamp = Math.floor(Date.now() / 1000).toString();
            const signature = await signRaw(timestamp, signer); // IMX-Signature

            const pojectResponse = await getUserProjects(signature, timestamp)
            if (pojectResponse) setProjects(pojectResponse.result)

            const assetResponse = await getUserAssets(wallet)
            if (assetResponse) setAssets(assetResponse.result)
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
                                <th rowSpan={2}>Id</th>
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
            <Row>
                <Col>
                    <h3>My Assets</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Token ID</th>
                                <th>Name</th>
                                <th>Collection Name</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {assets && assets.map((asset) => {
                                    return (
                                        <tr>
                                            <td>{asset.token_id}</td>
                                            <td>{asset.name}</td>
                                            <td>{asset.collection.name}</td>
                                            <td><img src={asset.image_url || placeholderImg} alt="" style={{ maxWidth: 50 }}></img></td>
                                        </tr>
                                    )
                                })}
                                {!assets &&
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
