import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <Card className="header-card">
      <Card.Img width={100} height={520} src="/images/header/header.png" alt="Card image" />
      <Card.ImgOverlay className="header-card-1">
        <Container>
          <div className="header-card-content">
            <Card.Title className='header-card-header'>WE DELIVER</Card.Title>
            <Card.Title className='header-card-header'>
              <Typewriter
                options={{
                  strings: ['MOBILE APPLICATION', 'WEB APPLICATION', 'CLOUD APPLICATION', 'IOT APPLICATION'],
                  autoStart: true,
                  delay: 100,
                  loop: true
                }}
              />
            </Card.Title>
          </div>
          <Card.Footer className='header-footer'>
            <div className='icon-scroll'></div>
          </Card.Footer>
          <Card.Text className='header-card-text'>
            <span className='header-span'>MOBILE</span> <span className='header-span'>WEB</span> <span className='header-span'>SALESFORCE</span> <span className='header-span'>IOT</span>
          </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Header;