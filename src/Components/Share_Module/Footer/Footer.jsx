import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Logo, MapPin, Phone, Email } from "../../../images/Images";

export default function Footer() {
  return (
    <>
      <footer className="pt-5 pb-5 footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src={Logo} alt="" />
              <p className="d-block mb-3 copy-right">&copy; Reserve 2023</p>
            </div>
            <div className="col-6 col-md">
              <h4>Features</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Men Essentials</Link>
                </li>
                <li>
                  <Link href="#">Women Essentials</Link>
                </li>
                <li>
                  <Link href="#">Art Essentials</Link>
                </li>
                <li>
                  <Link href="#">Catalog</Link>
                </li>
                <li>
                  <Link href="#">Track Your Order!</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h4>More</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Refund Policies</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md contact">
              <h4>Contact</h4>
              <ul className="list-unstyled text-small">
                <li>
                  <p>
                    <img src={MapPin} alt="" />
                    12 Abc Road, Lorem Ipsum 45463
                  </p>
                </li>
                <li>
                  <a href="tel:(000) 123 4567">
                    <img src={Phone} alt="" />
                    (000) 123 4567
                  </a>
                </li>
                <li>
                  <a href="mailto:support@dummy.com">
                    <img src={Email} alt="" />
                    support@dummy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
