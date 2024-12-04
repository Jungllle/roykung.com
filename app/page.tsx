import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const HomePage = () => (
  <Row className='mt-5 align-content-center'>
    <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
      <h1>About</h1>
      <p>
        Roy Lin 林昆彥 is the CEO and co-founder of{' '}
        <a href='https://jungllle.com'>Jungllle Inc</a> with Gary and Labrada.
        His entrepreneurial spirit and vision lead the company to journey of
        success. <a href='https://stickerhd.com'>StickerHD</a> is the best
        online custom die cut sticker service in Taiwan.
      </p>
      <p>
        Before Roy founded Jungllle, he was the also a co-founder of Credarp
        Inc, founded by Brian, Labrada and me at November 2013. Credarp builds
        web and iOS apps and are runing the product, elbum, Moneyball for
        basketball
      </p>
      <p>
        I'm also the founder of Dreamers' Day, which is the biggest student
        startup community in Taiwan. Brian and I started it because we believed
        that students should have entrepreneurship. There were 5 demo shows and
        20 meetups both in Taipei and Tainan, and over 300 students participated
        in.
      </p>
      <p>
        I share some interesting videos and ideas on{' '}
        <a href='https://roykung.tumblr.com/'>Tumblr</a>.
      </p>
      <p>
        I share my slides on{' '}
        <a href='https://www.slideshare.net/roykung'>Slideshare</a> and{' '}
        <a href='https://speakerdeck.com/roykung'>SpeakDeck</a>.
      </p>
      <p>
        You can find me on <a href='https://twitter.com/roylinkung'>Twitter</a>,
        or drop me an Email.
      </p>
    </Col>
    <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
      <div className='w-75 p-3 mx-auto'>
        <Image src='/profile.jpeg' alt='Roy Lin 林昆彥' fluid />
      </div>
    </Col>
  </Row>
);

export default HomePage;
