import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

export const SubmitButton = ({ loading, title, variant, className }) => {
  return (
    <Button className={className} variant={variant} type="submit">
      {title}  {loading && (<Spinner animation="border" size="sm" />)}
    </Button>
  );
};