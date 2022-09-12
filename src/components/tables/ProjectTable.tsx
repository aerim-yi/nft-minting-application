import { Table } from 'react-bootstrap';

export const ProjectTable = ({ projects }) => {
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
            {projects.map((project) => {
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
        </tbody>
    </Table>
}
