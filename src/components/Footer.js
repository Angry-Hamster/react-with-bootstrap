import React from 'react'
import { Container } from 'react-bootstrap'
import css from './Footer.module.css'

function Footer() {
  return (
    <Container className={css.footer} fluid style={{backgroundColor: 'brown', color: 'white'}}>
      <p>&copy; Copyright GoIt Testing edition 2021</p>
    </Container>
  );
}

export default Footer;