import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button';
function BasicExample() {
  return (
    <div className='container bg-dark p-5 w-75'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Movie Name</InputGroup.Text>
        <Form.Control
          placeholder="MovieName"
        />
      </InputGroup> 
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">https://example.com/users/</InputGroup.Text>
        <Form.Control
          placeholder="Movie URL"
        />
      </InputGroup>      

      <InputGroup>
        <InputGroup.Text>Summary</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

      <div className="d-grid gap-2 col-4 mx-auto mt-2">
  <Button className="btn btn-primary" type="button">Add Movie</Button>
</div>
    </div>
  );
}

export default BasicExample;