import React, { useState, useContext } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../../store/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    setError('');
    event.preventDefault();

    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('/auth/login', { email, password });
      if (response.status === 200) {
        // login(response.data.accessToken, response.data.user);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="mb-3 text-end">
                <a href="/forgot-password">Forgot your password?</a>
              </div>

              <div className="d-grid mb-3">
                <Button variant="dark" type="submit">
                  Sign in
                </Button>
              </div>

              <div className="text-center">
                <Button variant="link" onClick={() => navigate('/register')}>
                  Create account
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;