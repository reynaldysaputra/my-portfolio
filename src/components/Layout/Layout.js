import React from 'react';
import { Container } from 'react-bootstrap';
import style from './layout.module.css';

function Layout({children}) {
   return(
      <Container className={style.layout}>
         {children}
      </Container>
   )
}

export default Layout;