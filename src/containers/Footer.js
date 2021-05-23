import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          &copy;
          { ` ${(new Date()).getFullYear()} All rights reserved | Built with love by Denis Lafontant.`}
        </span>
      </div>
    </footer>
  )
};

export default Footer;