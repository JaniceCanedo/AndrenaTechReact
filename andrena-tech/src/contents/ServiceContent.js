import React, { Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ServiceContent extends Component {



  render() {

    const element = <FontAwesomeIcon icon={this.props.img} />
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function useState(theState) {
      return ([theState, theState]);
    }

    return (
      <>
        <div class="col-lg-4 col-md-6 align-items-stretch" data-aos="fade-up">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble">
              {element}
            </i>
            </div>
            <h4><a href={handleShow}>{this.props.serviceName}</a></h4>
            <p>{this.props.serviceDesc}</p>
          </div>
        </div>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );





  }
}

export default ServiceContent