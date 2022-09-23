import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export const CreateMetadataForm = () => {
    const [nftName, setNftName] = useState();
    const [nftDescription, setNftDescription] = useState();
    const [nftImgUrl, setNftImgUrl] = useState();
    const [nftAttach, setNftAttach] = useState();
    const [nftCollectable, setNftCollectable] = useState();
    const [nftClass, setNftClass] = useState();

    const sendMetadata = async () => {
        const metadata = {
            nftName: nftName,
            nftDescription: nftDescription,
            nftImgUrl: nftImgUrl,
            nftAttach: nftAttach,
            nftCollectable: nftCollectable,
            nftClass: nftClass
        }
        const response = await axios.post('http://localhost:3080/create-metadata', metadata);
        console.log(response.data)
    }
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="e.g. 1st NFT" name="nftName" onChange={e => setNftName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="e.g. This is your 1st nft" name="nftDescription" onChange={e => setNftDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control placeholder="<replace this with your own IPFS picture link>" name="nftImgUrl" onChange={e => setNftImgUrl(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Attack</Form.Label>
                <Form.Control placeholder="e.g. 123" onChange={e => setNftAttach(e.target.value)} />
                {/* has to be converted to a number*/}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Collectable</Form.Label>
                <Form.Control placeholder="e.g. true" onChange={e => setNftCollectable(e.target.value)} />
                {/* has to be converted to a boolean*/}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Class</Form.Label>
                <Form.Control placeholder="e.g. EnumValue1" onChange={e => setNftClass(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={sendMetadata}>
                Create Metadata
            </Button>
        </Form>
    )
}
