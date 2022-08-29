import { useState } from 'react';
import { Link } from '@imtbl/imx-sdk';
import { Navbar, Container, Button } from 'react-bootstrap';

export const HeaderBar = () => {
    const [walletAddress, setWalletAddress] = useState(localStorage.WALLET_ADDRESS)

    const linkAddress = 'https://link.ropsten.x.immutable.com';
    const link = new Link(linkAddress);

    async function login() {
        const { address, starkPublicKey } = await link.setup({});
        localStorage.setItem('WALLET_ADDRESS', address);
        localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey);
        setWalletAddress(localStorage.WALLET_ADDRESS);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><strong>NFT Minter</strong></Navbar.Brand>
                <Button variant="outline-info" onClick={login}>
                    Connect Wallet
                </Button>
            </Container>
        </Navbar>
    )
}
