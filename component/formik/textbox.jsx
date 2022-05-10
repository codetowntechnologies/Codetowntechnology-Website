import { Form, FormGroup } from 'react-bootstrap';
import React from 'react';

export const TextBox = (props) => {
  const { name, handleChange, type, placeholder, as, rows, formtext, value, error, required, label, maxLength, max, disabled, className } = props;
  return (
    <div>
      <FormGroup className="mb-3">
        {label && <Form.Label className={className}> {label} </Form.Label>}
        <Form.Control
          name={name}
          disabled={disabled}
          type={type}
          maxLength={maxLength}
          max={max}
          rows={rows}
          as={as}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={handleChange}
          isInvalid={error}
        />
        {error && (
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        )}
        {formtext && <Form.Text className="mt-2">
          {formtext}
        </Form.Text>}
      </FormGroup>
    </div>
  );
};