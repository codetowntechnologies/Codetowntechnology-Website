import React from 'react';
import { Button } from 'react-bootstrap';

export const CustomButton = ({ title, variant, onClick, className }) => {
  return (
    <Button className={className} variant={variant} onClick={onClick} type="button">
      {title}
    </Button>
  );
};