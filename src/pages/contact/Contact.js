import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <Container className="my-5">
                <h1 className="main-page-title page-title h0">
                    Contact and Address
                </h1>
                <div className="rte">
                    <p>For any inquiries, feedback, or assistance, please don't hesitate to contact us using the provided phone number or visit our address. We value your input and are committed to providing the best possible support.</p>
                    <p>Address: St 14, Falcon Complex Rawalpindi</p>
                    <p>Phone: 0349-9462350</p>
                    <p>Thank you for choosing our services. We look forward to serving you.</p>
                </div>
                <Button variant="dark" className="mt-3">Contact Us</Button>
            </Container>
            <Container className="my-5">
                <h2 className="visually-hidden">Contact form</h2>
                <Form method="post" action="/contact#ContactForm" id="ContactForm" acceptCharset="UTF-8">
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="utf8" value="✓" />
                    <Form.Group className="mb-3" controlId="ContactForm-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="contact[Name]" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactForm-email">
                        <Form.Label>Email <span aria-hidden="true">*</span></Form.Label>
                        <Form.Control type="email" name="contact[email]" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactForm-phone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel" name="contact[Phone number]" placeholder="Phone number" pattern="[0-9\-]*" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactForm-body">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={10} name="contact[Comment]" placeholder="Comment" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Send
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default Contact;