import React from "react";
import { Container, Row, Col, Table, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBox, FaShoppingCart, FaUsers, FaChartBar, FaHome, FaTag, FaImage, FaClipboardCheck, FaPercentage, FaCog } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { TbFlagDiscount } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white"><FaHome /> Home</Nav.Link>
        <Nav.Link href="#" className="text-white"><FaShoppingCart /> Orders</Nav.Link>
        <Nav.Link href="#" className="text-white"><IoMdPricetag /> Products</Nav.Link>
        <Nav.Link href="#" className="text-white"><FaUsers /> Customers</Nav.Link>
        <Nav.Link href="#" className="text-white"><FaImage /> Content</Nav.Link>
        <Nav.Link href="#" className="text-white"><FaChartBar /> Analytics</Nav.Link>
        <Nav.Link href="#" className="text-white"><MdAdsClick /> Marketing</Nav.Link>
        <Nav.Link href="#" className="text-white"><RiDiscountPercentFill /> Discounts</Nav.Link>
      </Nav>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white"><FaCog /> Settings</Nav.Link>
      </Nav>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-4">
          <Navbar bg="light" expand="lg" className="mb-4">
            <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
          </Navbar>
          <h4>Orders</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ORD1234</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td>$99.99</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ORD5678</td>
                <td>Jane Smith</td>
                <td>Pending</td>
                <td>$49.99</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
