import { useState } from 'react';
import { getUserProjects } from '../api/projects-api';
import { getUserAssets } from '../api/assets-api'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Project, signRaw, Asset } from '@imtbl/core-sdk';
import { ethers } from 'ethers';
import { AssetTable } from '../components/tables/AssetTable';
import { ProjectTable } from '../components/tables/ProjectTable';

export const View = () => {
    const wallet = localStorage.WALLET_ADDRESS
    const [projects, setProjects] = useState<Project[]>()
    const [userAssets, setUserAssets] = useState<Asset[]>()

    const retrieveData = async () => {
        //get Signature from Metamask wallet
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []); //@TODO: ask Calvin why (https://stackoverflow.com/questions/71198438/ethers-js-error-unknown-account-0-operation-getaddress-code-unsupported-o)
        const signer = provider.getSigner();

        const timestamp = Math.floor(Date.now() / 1000).toString();
        const signature = await signRaw(timestamp, signer); // IMX-Signature

        const pojectResponse = await getUserProjects(signature, timestamp)
        if (pojectResponse) setProjects(pojectResponse.result)

        const assetResponse = await getUserAssets(wallet)
        if (assetResponse) setUserAssets(assetResponse.result)
    }

    return (
        <Container>
            {userAssets && (
                <>
                    <Row>
                        <Col>
                            <h3>My Projects</h3>
                            {projects && <ProjectTable projects={projects} />}
                            {console.log('projects', projects)}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>My Assets</h3>
                            {userAssets && <AssetTable assets={userAssets} />}
                        </Col>
                    </Row>
                </>
            )}
            {!userAssets && (
                <Row>
                    <Col>
                        <Button onClick={retrieveData}>Retrive Data</Button>
                    </Col>
                </Row>
            )}
        </Container>
    )
}
