import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/logo.png" alt="RCON SPACE" className="footer-logo" />
      </div>

      <div className="footer-center">
        <p>Rcon2025@All rights reserved</p>
        <div className="footer-links">
          <a href="/terms">Terms of Use</a>
          <span>|</span>
          <a href="/privacy">Privacy</a>
        </div>
      </div>

      <div className="footer-right">
        <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </footer>
  );
}
