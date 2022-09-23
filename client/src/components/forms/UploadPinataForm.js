import { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import axios from "axios";

export const UploadPinataForm = ({ setInfo }) => {
    const [imgFile, setImgFile] = useState();
    const [show, setShow] = useState(false);

    const sendImgFile = async () => {
        const data = new FormData();
        data.append('file', imgFile);

        const response = await axios.post('http://localhost:3080/upload', data);

        setInfo({ key: "Image URL", value: `https://gateway.pinata.cloud/ipfs/${response.data}` })
        setShow(true)
        console.log("IMAGES_SUBMIT_SUCCESS");
    }

    return (
        <Form>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={'info'}>
                <Toast.Body>{`Your image has been uploaded!`}</Toast.Body>
            </Toast>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select NFT files</Form.Label>
                <Form.Control type="file" name="file" onChange={e => setImgFile(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" className="mb-3" onClick={sendImgFile}>
                Upload image file
            </Button>
        </Form>
    )
}
