import React from 'react';
import { Center } from '@chakra-ui/react';

function Footer() {
  return (
    <Center className="footer" backgroundColor="teal">
       <footer>
      <div className="container-footer">
        <span className="text-muted">
          &copy;
          { ` ${(new Date()).getFullYear()} All rights reserved | Built with love by: Denis Lafontant.`}
        </span>
      </div>
    </footer>
    </Center>
  )
};

export default Footer;