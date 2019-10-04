import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NakedVic from '../assets/mario.jpg';

const MyModal = (props) => {

  const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true);
  }

  function toggle() {
    setModal(false);
  }


    return (
      <div>
        <Button color="danger" onClick={openModal}>To see Victor Naked</Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-content text-center">
          <ModalHeader toggle={toggle}>Victor at 20years old Naked</ModalHeader>
          <ModalBody>
            <img src={NakedVic} alt="" width="100%"/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Buy his shoes</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export default MyModal;
