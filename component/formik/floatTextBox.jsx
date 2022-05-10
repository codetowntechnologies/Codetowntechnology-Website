import { FloatingLabel, Form, FormGroup } from 'react-bootstrap';
import React from 'react';
const FloatTextBox = (props) => {
  const { name, type, placeholder, onBlur, value, as, rows, error, required, label, maxLength, max, disabled, className } = props;
  return (
    <div>
      {/* <FormGroup className="mb-2">
        <Form.Label className={className}> {label} </Form.Label>
        <Form.Control
          name={name}
          disabled={disabled}
          type={type}
          maxLength={maxLength}
          as={as}
          max={max}
          rows={rows}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => props.onChange(e)}
          isInvalid={error}
        />
        {error && (
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        )}
      </FormGroup> */}

      <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3 floating-label"
      >
        <Form.Control
          name={name}
          disabled={disabled}
          type={type}
          maxLength={maxLength}
          as={as}
          max={max}
          rows={rows}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
          required={required}
          style={props.styles}
          onChange={(e) => props.onChange(e)}
          isInvalid={error}
        />
        {error && (
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        )}
      </FloatingLabel>
    </div>
  );
};
export default FloatTextBox;
