import React, { Component } from 'react';
class Landing extends Component {
    render() {
        return (
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Andrena Technology</h1>
                    <h2>Offering technology solutions in cyber security, database design, data analytics, and website design.</h2>
                    <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
        );
    }
}

export default Landing
