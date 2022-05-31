import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';

const SelectBox = (props) => {
  const { option, label, className } = props;
  return (
    <>
      <FormGroup className="mb-3">
        {label && <Form.Label className={className}> {label} </Form.Label>}
        <Form.Select className='form-select-1' aria-label="Default select example">
          {option && option.map((value, index) => {
            return (
              <option key={`${index}`} value={value.id}>{value.name}</option>
            );
          })}
        </Form.Select>
      </FormGroup>
    </>
  );
};

export default SelectBox;