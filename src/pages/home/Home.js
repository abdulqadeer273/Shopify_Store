import React from 'react'
import { Card } from 'react-bootstrap';
import pimage1 from '../../assets/images/pimage1.jpg';
import pimage2 from '../../assets/images/pimage2.png';
import pimage3 from '../../assets/images/pimage3.png';
import pimage4 from '../../assets/images/pimage4.png';
import pimage5 from '../../assets/images/pimage5.png';
import pimage6 from '../../assets/images/pimage6.png';
import pimage7 from '../../assets/images/pimage7.png';
import pimage8 from '../../assets/images/pimage8.png';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
const Home = () => {
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
        <div className="App">

            <Header />
            {/* Hero section */}
            <section
                className="hero bg-image text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: 'url(Distincto_2.webp)',
                    height: '85vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="hero-content" style={{ marginTop: "25rem" }}>
                    <h1 className="display-4">Arkab's Signature Collection 23'</h1>
                    <button className="btn btn-outline-light mt-3">Shop All</button>
                </div>
            </section>

            {/* Welcome section */}
            <section className="welcome text-center py-5">
                <div className="container">
                    <h2 className="display-5">Welcome Minimalism</h2>
                    <p className="lead">We are creating a future that welcomes all and wastes nothing. Our minimalistic design is a gateway to sustainability, crafted with simplicity. The Perfect Wallet For Men</p>
                </div>
            </section>

            {/* Featured products section */}
            <section className="featured-products py-5">
                <div className="container">
                    <h2 className="m-2">Featured Products</h2>
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
                                        <Card.Text>
                                            <span>★★★★☆ ({product.reviews})</span>
                                            <div className='d-flex'>
                                                <span className='me-3' style={{ textDecoration: 'line-through' }}>Rs. {product.originalPrice} PKR</span>
                                                <span style={{ fontWeight: 'bold' }}>Rs. {product.price} PKR</span>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-dark px-4 py-2">View All</button>
                </div>
            </section>

            {/* Happy Customers section */}
            <section className="happy-customers text-center py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Happy Customers Only</h5>
                            <p>We take pride in providing our customers the service where no one is unhappy. Customer support is always there to resolve any issue</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Positive Transparent Reviews</h5>
                            <p>We have sold pieces in thousands and reviews speak for themselves. They can be checked on daraz.pk and @karar.shop on instagram</p>
                        </div>
                        <div className="col-md-4">
                            <h5>30 Days Return Policy</h5>
                            <p>Free returns and exchanges for 30 days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us section */}
            <section className="about-us py-5">
                <div className="container">
                    <h2 className="display-5">About Us</h2>
                    <p className="lead">A year ago, we set out to realize the dream of creating minimalistic timeless designs. Our brand was started small with only a single wallet design that is to this day our best seller. In a short span of time, it has managed to introduce multiple leather products. Karar is not just a fashion accessory brand, it's a state of mind. We are fully dedicated to the cause of environmental conservation. With its biodegradable packaging, Karar is a firm believer of sustainability. Influential, innovative and progressive, Karar is reinventing a wholly modern approach to fashion. We continue to oversee a focused approach to growing the brand's relevance, presence and long-term growth.</p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home