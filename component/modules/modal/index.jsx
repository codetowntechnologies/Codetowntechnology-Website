import React from 'react';
import { Image, Modal } from 'react-bootstrap';

const ModelBox = (props) => {
  const { src, alt } = props;
  return (
    <>
      <Modal
        show={props.show}
        fullscreen={props.fullscreen}
        onHide={props.onHide}
        className='portfolio-detail-header'
      >
        <Modal.Header className="mb-0 portfolio-detail-header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter"><Image src={src} alt={alt} /> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='portfolio-detail-body'>{props.children}</Modal.Body>
      </Modal>
    </>
  );
};
export default ModelBox;
