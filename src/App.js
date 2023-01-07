import './App.css';
import { Container, Nav, Navbar, Image, Row, Col, Carousel } from 'react-bootstrap';
import Footer from './footer';
import { ImWhatsapp } from 'react-icons/im';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" dir='ltr'>
        <Container>
          <Navbar.Brand href="#main"><Image src='logo.jpeg' height={55} width={100}></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav dir='rtl'>
              <Nav.Link eventKey={2} href="#main">ראשי</Nav.Link>
              <Nav.Link eventKey={2} href="#about">אודות</Nav.Link>
              <Nav.Link eventKey={2} href="#project">פרויקטים</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">צרו קשר</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <div id='main' className='main'><div className='main_color'>
          <div className='main_text h-50'>עיצוב פנים</div>
        </div></div>
      </div>
      <Container fluid id='about' className='about'>
        <Row>
          <Col sm={1} xs={0}></Col>
          <Col sm={5} xs={12}>
            <div  className='title_about'>נעים מאוד! אילה הורביץ.</div>
            <p className='text_about'>שמי אילה הורביץ בעלת סטודיו לעיצוב פנים בבית שמש. סיימתי בהצלחה לימודי עיצוב פנים בפרוג.
              פיתחתי את יכולת ההקשבה והאינטרקציה
              שלי עם הלקוחות, והתמחיתי באפיון צרכים המדויק של הלקוח ומימוש כל שאיפותיו בדירת החלומות שלו.</p>
            <p className='text_about'>אני מאמינה בחיבורים נכונים ומעבירה את הלקוח תהליך עיצוב מותאם בשבילו, כל אחד עם הסגנון שמדבר אליו, והתאמת החלל בצבעים ובטקסטורות שהוא חולם ורוצה.</p>
          </Col>
          <Col sm={6} xs={0} className="d-none d-md-block">
            <img src='about.png' className='img_about'></img>
          </Col>
        </Row>

        <Row className='carousel' id='project'>
          <Col sm={2}></Col>
          <Col sm={8}>
          <div className='title_project'>פרוייקטים נבחרים</div>
            <Carousel >
              <Carousel.Item>
              <img className="d-block w-100 img_project"src="design1.png" alt="Third slide" />
                <Carousel.Caption>
                  <h3>פנטהאוז בבית שמש</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block w-100 img_project"src="design2.png" alt="Third slide" />
                <Carousel.Caption>
                  <h3>פנטהאוז בבית שמש</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block w-100 img_project"src="design3.png" alt="Third slide" />
                <Carousel.Caption>
                  <h3>פנטהאוז בבית שמש</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block w-100 img_project"src="design4.png" alt="Third slide" />
                <Carousel.Caption>
                  <h3>פנטהאוז בבית שמש</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="d-block w-100 img_project"src="design5.png" alt="Third slide" />
                <Carousel.Caption>
                  <h3>פנטהאוז בבית שמש</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      <div className='contact' id='contact'><Footer /></div>
    </div>
  );
}

export default App;
