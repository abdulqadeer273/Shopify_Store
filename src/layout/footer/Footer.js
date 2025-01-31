import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className='mb-3'>Quick Links</h5>
                        <p>Terms and Conditions</p>
                        <p>Refund Policy</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Policy</p>
                        <p>Contact and Address</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='mb-3'>Our Mission</h5>
                        <p>Here at Karar we are creating a future that welcomes all and wastes nothing.</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='mb-3'>Contact Us</h5>
                        <p>For any queries, we are here to assist you on Instagram @arkab.shop and on live chat</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3 border-top">
                <div className="footer-bar mt-4">© 2023 Arkab</div>
            </div>
        </footer>
    )
}

export default Footer