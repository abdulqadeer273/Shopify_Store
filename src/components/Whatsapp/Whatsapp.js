import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
    return (
        <>
            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/923317726261"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    width: '50px',
                    height: '50px',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: '#25d366',
                    color: '#FFF',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontSize: '30px',
                    boxShadow: '2px 2px 3px #999',
                    zIndex: '1000'
                }}
            >
                <FaWhatsapp />
            </a>
        </>
    )
}

export default Whatsapp