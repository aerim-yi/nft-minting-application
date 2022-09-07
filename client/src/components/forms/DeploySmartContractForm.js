import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { deploySmartContract } from "../../api/contracts-api"

export const DeploySmartContractForm = () => {
  const owner = localStorage.WALLET_ADDRESS
  const [contractName, setContractName] = useState();
  const [contractSymbol, setContractSymbol] = useState();

  const deployNewSmartContract = () => {
    deploySmartContract(owner, contractName, contractSymbol)
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Contract Name</Form.Label>
        <Form.Control placeholder="Enter contract name" onChange={e => setContractName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contract Symbol</Form.Label>
        <Form.Control placeholder="Enter contract symbol" onChange={e => setContractSymbol(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={deployNewSmartContract}>
        Deploy Smart Contract
      </Button>
    </Form>
  );
}
