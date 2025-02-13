import React, { useState } from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        setError('');
        event.preventDefault();

        // Check if any field is empty
        if (!firstName || !lastName || !email || !password) {
            setError('All fields are required.');
            return;
        }

        // Check if password includes first name, last name, or email
        const lowerCaseFirstName = firstName.toLowerCase();
        const lowerCaseLastName = lastName.toLowerCase();
        const lowerCaseEmail = email.toLowerCase();
        const lowerCasePassword = password.toLowerCase();

        if (
            lowerCasePassword.includes(lowerCaseFirstName) ||
            lowerCasePassword.includes(lowerCaseLastName) ||
            lowerCasePassword.includes(lowerCaseEmail.split('@')[0]) // Check email prefix
        ) {
            setError('Password must not include your first name, last name, or email.');
            return;
        }

        if (password === 'oldPassword') {
            setError('Password must be different. For the security of your account, you cannot use this password.');
            return;
        }

        setError('');
        try {
            const response = await axios.post('/auth/register', {
                firstName,
                lastName,
                email,
                username: firstName,
                password,
                roles: ['user']
            });
            if (response.status === 201) {
                // Handle successful registration (e.g., redirect to login page)
                alert('Registration successful! Please check your email to verify your account.');
                navigate('/login');
                // Redirect to login page or another appropriate page
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <>
            <Header />
            <Container className="my-5 text-center ">
                <h2 className='my-5'>Create Account</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Control
                            type="text"
                            className='py-2'
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Control
                            type="text"
                            className='py-2'
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            className='py-2'
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            className='py-2'
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="dark" type="submit" className='py-2 px-4'>
                        Create
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default SignIn