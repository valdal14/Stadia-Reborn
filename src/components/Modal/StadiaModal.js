import { Modal, Button } from 'react-bootstrap';
import './StadiaModal.css';

const StadiaModal = (props)=> {

    let bodyConfig = { text: '' }

    switch (props.modalConfiguration) {
      case 'contact':
        bodyConfig.text = 'Open Contact Modal';
        break;
      case 'controller':
        bodyConfig.text = 'Open Controller Modal';
        break;
      case 'friends':
          bodyConfig.text = 'Open Friends Modal';
          break;
      default:
        break;
    }

    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { bodyConfig.text }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default StadiaModal;
