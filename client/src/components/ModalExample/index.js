import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import "./style.css";

const ModalExample = (props) => {
  const {
    className
  } = props;

  

  return (
    <div>
     
      <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
      <ModalHeader className="success" toggle={props.toggle}>Book is Saved!</ModalHeader>
        
        
      </Modal>
    </div>
  );
}

export default ModalExample;