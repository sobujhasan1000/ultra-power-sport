import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='facebook.com'><Link><FaFacebookF/></Link></a>
                        <a href=''><FaYoutube/></a>
                        <a href=''><FaTwitter/></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Ultrapower sports academy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;