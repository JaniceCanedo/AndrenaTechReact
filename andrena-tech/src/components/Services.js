import React, { Component } from 'react';
import ServiceContent from '../contents/ServiceContent';
import { faPeopleArrows, faChalkboardTeacher, faEdit } from '@fortawesome/free-solid-svg-icons'


class Services extends Component{


    render(){
        return(
            <section id="services" class="services">
                <h1>Services Provided</h1>
                <hr></hr>
                <div class="row">

                    <ServiceContent img={faChalkboardTeacher} serviceName="Training" serviceDesc="Provide training for...." />
                    <ServiceContent img={faEdit} serviceName="Product Creation and Implementation" serviceDesc="Consulting, Training, and Cyber Security Solutions." />
                    <ServiceContent img={faPeopleArrows} serviceName="Consulting" serviceDesc="Consulting services for..." />

                </div>

            </section>
        );
    }
}

export default Services