import { Button, Form } from 'react-bootstrap';

export function NewProjectForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Project Name</Form.Label>
        <Form.Control placeholder="Enter project name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company Name</Form.Label>
        <Form.Control placeholder="Enter company name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Project
      </Button>
    </Form>
  );
}
