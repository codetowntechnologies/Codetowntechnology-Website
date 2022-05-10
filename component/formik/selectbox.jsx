import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';

const SelectBox = (props) => {
  const { option, label, className } = props;
  return (
    <>
      <FormGroup className="mb-3">
        {label && <Form.Label className={className}> {label} </Form.Label>}
        <Form.Select className='form-select-1' aria-label="Default select example">
          <option value="1">{option}</option>
        </Form.Select>
      </FormGroup>
    </>
  );
};

export default SelectBox;