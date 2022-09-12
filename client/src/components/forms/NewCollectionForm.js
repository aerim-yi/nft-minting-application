import { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';

export const NewCollectionForm = ({ setInfo }) => {
    const [projectId, setProjectId] = useState();
    const [contractAddress, setContractAddress] = useState();
    const [collectionName, setCollectionName] = useState();
    const [description, setDescription] = useState();
    const [metadataURL, setMetadataURL] = useState();
    const [iconURL, setIconURL] = useState();
    const [collectionImageURL, setCollectionImageURL] = useState();
    const [showToast, setShowToast] = useState(false);

    return (
        <Form>
            <Toast className="mb-3" onClose={() => showToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Body>{"Your collection has been created!"}</Toast.Body>
            </Toast>
            <Form.Group className="mb-3">
                <Form.Label>Project ID</Form.Label>
                <Form.Control type="text" placeholder="Enter your contract address" onChange={e => setProjectId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contract Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your contract address" onChange={e => setContractAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Colle ction Name</Form.Label>
                <Form.Control type="text" placeholder="Enter collection name" onChange={e => setCollectionName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Metadata API URL</Form.Label>
                <Form.Control type="text" placeholder="Enter metadata API URL" onChange={e => setMetadataURL(e.target.value)} />
                <Form.Text className="text-muted">
                    Copy it from the information board if its available.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Icon URL</Form.Label>
                <Form.Control type="text" placeholder="Enter icon URL" onChange={e => setIconURL(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Collection Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter collection image URL" onChange={e => setCollectionImageURL(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="button">
                Create Collection
            </Button>
        </Form>
    )
}
