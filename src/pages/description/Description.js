import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image, Badge, ProgressBar } from 'react-bootstrap';
import { FaStar, FaUserCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import './Description.css';
import { Link } from 'react-router-dom';

const Description = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      date: "01/29/2025",
      name: "Moon R.",
      review: "PU Leather Wallet & Pop up card holder",
      verified: true,
    },
    {
      date: "01/27/2025",
      name: "Zumair S.",
      review: "PU Leather Wallet & Pop up card holder",
      verified: true,
    },
    // Add more reviews as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Header />
      <Container className="py-5" style={{ maxWidth: '900px' }}>
        <Row className="g-4">
          {/* Left Side - Images */}
          <Col md={6} className="text-center">
            <Image src="https://karar.shop/cdn/shop/products/WhatsAppImage2023-02-25at12.24.06AM.jpg?v=1705592401&width=713" fluid className="rounded" />
            <Row className="mt-3">
              <Col><Image src="https://karar.shop/cdn/shop/products/WhatsAppImage2023-02-25at12.24.06AM.jpg?v=1705592401&width=713" fluid className="rounded" /></Col>
              <Col><Image src="https://karar.shop/cdn/shop/products/WhatsAppImage2023-02-25at12.24.06AM.jpg?v=1705592401&width=713" fluid className="rounded" /></Col>
            </Row>
            <Row className="mt-3">
              <Col><Image src="https://karar.shop/cdn/shop/products/WhatsAppImage2023-02-25at12.24.06AM.jpg?v=1705592401&width=713" fluid className="rounded" /></Col>
              <Col><Image src="https://karar.shop/cdn/shop/products/WhatsAppImage2023-02-25at12.24.06AM.jpg?v=1705592401&width=713" fluid className="rounded" /></Col>
            </Row>
          </Col>

          {/* Right Side - Product Details */}
          <Col md={6}>
            <h5 className="">PU Leather Wallet & Pop up card holder</h5>
            <div className="text-warning mb-2">★★★★★ <span className="text-dark">391 reviews</span></div>
            <h6 className="text-muted text-decoration-line-through">Rs.3,000.00 PKR</h6>
            <h4 className="">Rs.1,999.00 PKR <Badge style={{ borderRadius: "1rem", background: "yellow" }}>Sale</Badge></h4>

            {/* Color Options */}
            <div className="my-3">
              <span className="">Color:</span>
              <div className="d-flex gap-2 mt-2">
                <Button variant="dark">Black</Button>
                <Button variant="outline-dark">Brown</Button>
                <Button variant="outline-dark">Dark Brown</Button>
                <Button variant="outline-dark">Light Coffee</Button>
              </div>
            </div>

            {/* Style Options */}
            <div className="my-3">
              <span className="">Style:</span>
              <div className="d-flex gap-2 mt-2">
                <Button variant="dark">Normal</Button>
                <Button variant="outline-dark">Strap and Cash Pocket</Button>
              </div>
            </div>

            {/* Quantity */}
            <div className="d-flex align-items-center my-3">
              <span className="me-3">Quantity:</span>
              <Button variant="dark" className="px-3">-</Button>
              <span className="mx-3">1</span>
              <Button variant="dark" className="px-3">+</Button>
            </div>

            {/* Buttons */}
            <div className="d-grid gap-2">
              <Button variant="outline-dark">Add to cart</Button>
              <Button variant="dark">Buy with Cash on Delivery</Button>
              <Button variant="dark">Buy it now</Button>
            </div>

            {/* Sale Timer */}
            <div className="mt-4 text-dark text-center">
              <strong>Hurry! Sale ends in</strong>
              <h3 className="mt-2">10 : 29</h3>
            </div>

            {/* Customer Reviews */}
            <div className="my-5">
              <h4 className="text-center">Customer Reviews</h4>
              <Row className="justify-content-center">
                <Col xs={1} className="d-flex align-items-center justify-content-center">
                  <FaChevronLeft size={24} onClick={handlePrev} style={{ cursor: 'pointer' }} />
                </Col>
                <Col xs={10} md={8}>
                  <Card className="bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ height: "375px" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} color="gold" />
                          ))}
                        </div>
                        <small>{reviews[currentIndex].date}</small>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <FaUserCircle size={20} className="me-2" />
                        <strong>{reviews[currentIndex].name}</strong> <span className="badge bg-secondary ms-2">Verified</span>
                      </div>
                      <p className="mt-2">{reviews[currentIndex].review}</p>
                    </Card.Body>
                    <div className="text-start">
                      <Link to="" className="text-white">Full Review</Link>
                    </div>
                  </Card>
                </Col>
                <Col xs={1} className="d-flex align-items-center justify-content-center">
                  <FaChevronRight size={24} onClick={handleNext} style={{ cursor: 'pointer' }} />
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button variant="dark">Read More Reviews</Button>
              </div>
            </div>

            {/* Overall Rating Section */}
            <div className="text-center my-5">
              <h5>⭐ 4.71 out of 5</h5>
              <p>Based on 391 reviews</p>
              <div className="text-start mx-auto" style={{ maxWidth: "400px" }}>
                <div className="row">
                  <div className='col-3'>{[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  </div>
                  <div className='col-9 d-flex'>
                    <ProgressBar now={90} className="w-75 me-2 mt-2" />
                    <span>313</span>
                  </div>
                </div>
                <div className="row">
                  <div className='col-3'>{[...Array(4)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  </div>
                  <div className='col-9 d-flex'>
                    <ProgressBar now={50} className="w-75 me-2 mt-2" />
                    <span>48</span>
                  </div>
                </div>
                <div className="row">
                  <div className='col-3'>{[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  </div>
                  <div className='col-9 d-flex'>
                    <ProgressBar now={30} className="w-75 me-2 mt-2" />
                    <span>26</span>
                  </div>
                </div>
                <div className="row">
                  <div className='col-3'>{[...Array(2)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  </div>
                  <div className='col-9 d-flex'>
                    <ProgressBar now={10} className="w-75 me-2 mt-2" />
                    <span>1</span>
                  </div>
                </div>
                <div className="row">
                  <div className='col-3'>{[...Array(1)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  </div>
                  <div className='col-9 d-flex'>
                    <ProgressBar now={5} className="w-75 me-2 mt-2" />
                    <span>3</span>
                  </div>
                </div>
              </div>
              <Button variant="dark" className="mt-3">Write a Review</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Description;