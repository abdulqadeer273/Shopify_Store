import React from 'react'
import { Card } from 'react-bootstrap';
import Header from '../../layout/header/Header';
import pimage1 from '../../assets/images/pimage1.jpg';
import pimage2 from '../../assets/images/pimage2.png';
import pimage3 from '../../assets/images/pimage3.png';
import pimage4 from '../../assets/images/pimage4.png';
import pimage5 from '../../assets/images/pimage5.png';
import pimage6 from '../../assets/images/pimage6.png';
import pimage7 from '../../assets/images/pimage7.png';
import pimage8 from '../../assets/images/pimage8.png';
import Footer from '../../layout/footer/Footer';

const Collections = () => {
    const products = [{
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage1,
        status: "Sale"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage2,
        status: "Sold"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage3,
        status: "Sale"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage4,
        status: "Sold"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage5,
        status: "Sale"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage6,
        status: "Sold"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage7,
        status: "Sale"
    }, {
        name: "PU Leather Wallet & Pop up card holder",
        price: 1999,
        originalPrice: 3000,
        rating: 4.5,
        reviews: 391,
        imageUrl: pimage8,
        status: "Sold"
    }];
    return (
        <>
            <Header />
            {/* Featured products section */}
            <section className="featured-products py-5">
                <div className="container">
                    <h2 className="m-2">Products</h2>
                    <div className='d-flex justify-content-between align-items-center mt-5'>
                        <div>
                            Filter: Availability price
                        </div>
                        <div>
                            Sort by: Alphabetically, A-Z 11 products
                        </div>
                    </div>
                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                                <Card style={{ width: '100%', margin: '1rem auto' }}>
                                    <div style={{ position: 'relative' }}>
                                        <Card.Img variant="top" src={product.imageUrl} />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '5px 10px'
                                        }}>
                                            {product.status}
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>{product.name}</Card.Text>
                                        <div>
                                            <span>★★★★☆ ({product.reviews})</span>
                                            <div className='d-flex'>
                                                <span className='me-3' style={{ textDecoration: 'line-through' }}>Rs. {product.originalPrice} PKR</span>
                                                <span style={{ fontWeight: 'bold' }}>Rs. {product.price} PKR</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Collections