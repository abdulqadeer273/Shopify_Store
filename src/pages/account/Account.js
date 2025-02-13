import React, { useContext } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { Container, Card, Button } from 'react-bootstrap';
import { GlobalContext } from '../../store/GlobalContext';

const Account = () => {
  const { logout } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <Container className="my-5" style={{ minHeight: "27vh" }}>
        <div className='d-flex justify-content-between  mb-4'>
          <h2>Account</h2>
          <div>
            <Button variant="outline-dark" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
        <Card className='p-5 mb-4'>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <Button variant="dark" className="mt-3">
            Edit Account Details
          </Button>
        </Card>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Order History</Card.Title>
            <Card.Text>
              You haven't placed any orders yet.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Account;