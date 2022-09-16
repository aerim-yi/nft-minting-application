import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

export const UploadPinataForm = ({ setInfo }) => {
    const [imgFile, setImgFile] = useState();

    const sendImgFile = async () => {
        const data = new FormData();
        data.append('file', imgFile);

        const response = await axios.post('http://localhost:3080/upload', data);

        setInfo({ key: "Image URL", value: `https://gateway.pinata.cloud/ipfs/${response.data}` })
        console.log("IMAGES_SUBMIT_SUCCESS");
    }

    return (
        <Form>
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
