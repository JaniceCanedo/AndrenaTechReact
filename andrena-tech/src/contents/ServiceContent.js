import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ServiceContent extends Component {
  constructor(props){
    super(props);
    this.element = <FontAwesomeIcon icon={this.props.img} />

    this.state = {
      show: false
    }
    



  };

  render() {

    const handleShow = () => this.setState({show:true});
    const handleClose = () => this.setState({show:false});

    return (
      
      <>

        <div class="col-lg-4 col-md-6 align-items-stretch" data-aos="fade-up">
        <a onClick={handleShow}>
          <div class="icon-box">
          
            <div class="icon"><i class="bx bxl-dribbble">
              {this.element}
            </i>
            </div>
            <h4>{this.props.serviceName}</h4>
            <p>{this.props.serviceDesc}</p>
            
          </div>
          </a>
        </div>

        
          <Modal show={this.state.show} onHide={handleClose}>
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