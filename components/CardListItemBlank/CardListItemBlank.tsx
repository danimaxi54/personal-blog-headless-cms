import React from 'react';

import {
    Col,
    Card,
    Image
} from 'react-bootstrap';

const CardListItemBlank = () => (
    <>
        {Array<number>(3)
            .fill(0)
            .map((_, index) => (
                <Col
                    key={`${index}-list`}
                    md="9"
                >
                    <Card className='fj-card fj-card-list placeholder'>
                        <div className='card-body-wrapper'>
                            <Card.Header className='d-flex flex-row'>
                                <Image
                                    src='https://via.placeholder.com/150'
                                    className='rounded-circle mr-3'
                                    height='50px'
                                    width='50px'
                                    alt='avatar'
                                />

                                <div>
                                    <Card.Title className='font-weight-bold mb-1'>
                                        Placeholder Author
                                    </Card.Title>

                                    <Card.Text className='card-date'>
                                        Placeholder Date
                                    </Card.Text>
                                </div>
                            </Card.Header>

                            <Card.Body>
                                <Card.Title className='card-main-title'>
                                    Placeholder Title
                                </Card.Title>

                                <Card.Text>
                                    Placeholder Subtitle
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            ))
        }
    </>
);

export default CardListItemBlank;
