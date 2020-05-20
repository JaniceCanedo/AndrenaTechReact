import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ServiceContent extends Component {



    render() {

      const element = <FontAwesomeIcon icon={this.props.img} />
        return (

          <div class="col-lg-4 col-md-6 align-items-stretch" data-aos="fade-up">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble">
                {element}
                </i>
                </div>
        <h4><a href="">{this.props.serviceName}</a></h4>
                <p>{this.props.serviceDesc}</p>
              </div>
            </div>
        );
    }
}

export default ServiceContent