import React from 'react';

import {
    Col,
    Image,
    Media,
    Row
} from 'react-bootstrap';

const AuthorIntro = () => (
    <Row>
        <Col md='8'>
            <Media className='mb-4 admin-intro'>
                <Image
                    roundedCircle
                    width={64}
                    height={64}
                    className='mr-3'
                    src='https://avatars.githubusercontent.com/u/69904650?v=4'
                    alt='Generic placeholder'
                />

                <Media.Body>
                    <h5 className='font-weight-bold mb-0'>
                        Hello Friends,
                    </h5>

                    <p className='welcome-text'>
                        My name is Daniil Ivanov and I am an experienced software engineer
                        and this is my blog page.
                    </p>
                </Media.Body>
            </Media>
        </Col>
    </Row>
);

export default AuthorIntro;
