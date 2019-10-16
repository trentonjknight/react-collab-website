import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import vshoe from '../assets/vshoe.jpg';

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
        <Button color="danger" onClick={openModal}>Our most exclusive sale!</Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-content text-center">
          <ModalHeader toggle={toggle}>Victor's Prized posession, his worn shoes!</ModalHeader>
          <ModalBody>
            <img src={vshoe} alt="" width="100%"/>
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
