import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/dashboard" className="flex-column">
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/orders">Orders</Nav.Link>
      <Nav.Link href="/customers">Customers</Nav.Link>
      <Nav.Link href="/reports">Reports</Nav.Link>
      <Nav.Link href="/settings">Settings</Nav.Link>
    </Nav>
  );
}

export default Sidebar;
