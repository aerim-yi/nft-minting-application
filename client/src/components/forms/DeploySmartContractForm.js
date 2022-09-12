import { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { deploySmartContract } from "../../api/contracts-api"

export const DeploySmartContractForm = ({ setInfo }) => {
  const owner = localStorage.WALLET_ADDRESS
  const [contractName, setContractName] = useState();
  const [contractSymbol, setContractSymbol] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState();
  const [deploying, setDeploying] = useState(false);

  const deployNewSmartContract = async () => {
    setToastMsg('Deploying contract.......Please wait')
    setDeploying(true)
    setShowToast(true)

    const asset = await deploySmartContract(owner, contractName, contractSymbol);
    setInfo({ key: "Contract Address", value: asset.address });
    setToastMsg('Your contract has been deployed!')
    setDeploying(false)
  }

  return (
    <>
      <div className="lead">
        Before deploying a smart contract please ensure you have completed the following:
        <ol>
          <li>
            In your terminal change to the server folder and run <code>npm run compile</code>.
          </li>
          <li>
            Once the smart contract has complied run in the same terminal <code>npm start</code> to start the node server.
          </li>
          <li>
            Fill out the contract name and symbol and then click the deploy button.
          </li>
        </ol>
      </div>
      <Form>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide={!deploying} bg={deploying ? 'warning' : 'Info'}>
          <Toast.Body>{toastMsg}</Toast.Body>
        </Toast>
        <br />
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
    </>
  );
}
