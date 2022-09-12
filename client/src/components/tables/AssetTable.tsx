import { Table } from 'react-bootstrap';
import placeholderImg from '../../asset/placeholderImg.png'

export const AssetTable = ({ assets }) => {
    return (
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
                {assets.map((asset) => (
                    <tr>
                        <td>{asset.token_id}</td>
                        <td>{asset.name}</td>
                        <td>{asset.collection.name}</td>
                        <td><img src={asset.image_url || placeholderImg} alt="" style={{ maxWidth: 50 }}></img></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
