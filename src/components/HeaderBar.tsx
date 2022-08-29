import { Navbar, Container, Button } from 'react-bootstrap';

export const HeaderBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><strong>NFT Minter</strong></Navbar.Brand>
                <Button variant="outline-info">
                    Connect Wallet
                </Button>
            </Container>
        </Navbar>
    )
}
