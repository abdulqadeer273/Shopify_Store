import React, { useState, useContext } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from '../../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../store/GlobalContext';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { login } = useContext(GlobalContext);

  const handleSubmit = async (event) => {
    setError('');
    event.preventDefault();

    if (!usernameOrEmail || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('/auth/login', { usernameOrEmail, password });
      if (response.status === 200) {
        login(response.data.accessToken, response.data.user);
        navigate(from, { replace: true });
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
              <Form.Group className="mb-3" controlId="formBasicUsernameOrEmail">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  pattern="^(?=.{3,})(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9._%+-]{3,})$"
                  title="Username must be at least 3 characters long or enter a valid email address"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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