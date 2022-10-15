import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import FaqCard from '../components/FaqCard';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Faq = () => {
    const faqItems = [
        { question: 'Question 1', answer: 'This is the answer to question 1' },
        { question: 'Question 2', answer: 'This is the answer to question 2' },
        { question: 'Question 3', answer: 'This is the answer to question 3' },
        { question: 'Question 4', answer: 'This is the answer to question 4' },
        { question: 'Question 5', answer: 'This is the answer to question 5' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <div id='faq-container'>
                <h1>You've Got Questions. We've Got Answers.</h1>
                <Accordion id='faq-items' style={{ width: '70vw', height: '20vh' }}>
                    {faqItems.map((faqItem, idx) => <FaqCard faqItem={faqItem} idx={idx} key={idx}/>)}
                </Accordion>
            </div>
            <h2 id='contact-us-header'>Not Finding What You Need? Contact Us!</h2>
            <div id='contact-us-container'>
                <Form id='contact-form'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"/>
                    </Form.Group>
                    
                    <Form.Group className='mb-2'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' placeholder='Ask us anything!' rows={3}/>
                    </Form.Group>

                    <Button className='mb-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>
                    City, State <br/>
                    therecipe@email.com<br/>
                    (123) 456-7890
                </p>
            </div>
            <Footer/>
        </>
    );
}

export default Faq;