import React from 'react';
import { Container, Row, Col, Form, Button, Collapse} from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { ImWhatsapp } from 'react-icons/im';
import './App.css';

function Footer() {


  return (
    <div className="Footer">
      <Container>
        <Row>
        <Col sm={1}></Col>
          <Col sm={5}>
             <div className='contact_text'>השאירו פרטים ונשוב אליכם בהקדם</div>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control size="sm" type="text" placeholder="שם מלא" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control size="sm" type="phone" placeholder="טלפון" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control size="sm" type="text" as="textarea" placeholder="הודעה" />
      </Form.Group>

      <div className='d-grid button_submit'><Button type="submit">שליחה</Button></div>
    </Form>
          </Col>
          <Col sm={5}>
        <Row className='social'>
              <Col ></Col>
              <Col xs={3}><a href="tel:0548427330" className='btn button_social'><BsFillTelephoneFill className='phone'/></a></Col>
              <Col xs={3}><a href="https://api.whatsapp.com/send?phone=972548427330" className='btn button_social'><ImWhatsapp className='whatsapp'/></a></Col>
              <Col xs={3}><a href="mailto:ayalahorwitz1@gmail.com " className='btn button_social'><HiOutlineMail className='email'/></a></Col>
              <Col></Col>
            </Row>
            <div className='footer_text1'>אילה הורביץ עיצוב פנים</div>
          <div className='footer_text2'>2022 &#169;</div>
          <div className='footer_text3'>עיצוב ובניית אתר: yakov horwitz</div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;