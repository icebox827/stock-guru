import React from 'react';
import { Flex, Center } from '@chakra-ui/react';

function Footer() {
  return (
    <Center className="footer" backgroundColor="teal" mt={10}>
       <footer>
          <div className="container-footer">
            <span className="text-muted">
              &copy;
              { ` ${(new Date()).getFullYear()} All rights reserved | Built with love by: `}
              <a href="https://denislafontant.com" target="_blank" rel="noreferrer" >Denis Lafontant.</a>
            </span>
          </div>
        </footer>
    </Center>
  )
};

export default Footer;