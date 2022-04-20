import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from '../face.png';



const About = () => {
    return (
        <div id='about' className='aboutUs'>
            <Container>
                <Row>
                    <Col className='profile'>
                        <Image

                            src={logo}
                            roundedCircle
                        />
                    </Col>
                    <Col className='description'>
                        
                        <h2>About Me</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About