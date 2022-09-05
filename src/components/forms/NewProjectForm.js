import { useState } from 'react';
import { createProject } from '../../api/projects-api';
import { ethers } from 'ethers';
import { Button, Form } from 'react-bootstrap';

export const NewProjectForm = () => {
  const [projectName, setProjectName] = useState();
  const [companyName, setCompanyName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [projectId, setProjectId] = useState();

  const createNewProject = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const project = await createProject(signer, companyName, contactEmail, projectName)
    if (project.id) {
      setProjectId(project.id)
    }
  }

  return (
    <Form>
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
