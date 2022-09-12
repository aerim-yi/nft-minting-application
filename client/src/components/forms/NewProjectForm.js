import { useState } from 'react';
import { createProject } from '../../api/projects-api';
import { ethers } from 'ethers';
import { Button, Form, Toast } from 'react-bootstrap';

export const NewProjectForm = ({ setInfo }) => {
  const [projectName, setProjectName] = useState();
  const [companyName, setCompanyName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [projectId, setProjectId] = useState();
  const [show, setShow] = useState(false);

  const createNewProject = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const project = await createProject(signer, companyName, contactEmail, projectName)
    if (project?.id) {
      setProjectId(project.id)
      setShow(true)
      setInfo({ key: "New project ID", value: project.id })
    }
  }

  return (
    <Form>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={'info'}>
        <Toast.Body>{`Your project with id ${projectId} has been created!`}</Toast.Body>
      </Toast>
      <br />
      <Form.Group className="mb-3">
        <Form.Label>Project Name</Form.Label>
        <Form.Control placeholder="Enter project name" onChange={e => setProjectName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company Name</Form.Label>
        <Form.Control placeholder="Enter company name" onChange={e => setCompanyName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setContactEmail(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={createNewProject}>
        Create Project
      </Button>
    </Form>
  );
}
