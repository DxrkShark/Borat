import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

function Cards() {
    return (
        <div>
                <Row>
                    <Col>
                        <Card border='primary' style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '17rem'}} variant="top" src='https://1.bp.blogspot.com/-3z29-vwOKpU/XpCTphbfYrI/AAAAAAAAzOw/Ao9GAv3fW20g233u1YDdPh4jAlbr1xyjACLcBGAsYHQ/s1600/Flag_of_Kazakhstan.gif' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card border='primary' style={{ width: '18rem'}}>
                    <Card.Img style={{ height: '17rem'}} variant="top" src="https://media.elcinema.com/uploads/_320x_302ccc1eb152108aa1aa17fd589f8b4d617a482cff55694c1af534c5a7095f12.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card border='primary' style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '17rem'}} variant="top" src="https://images.indianexpress.com/2020/10/borat-2-1200.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>
    )
}

export default Cards

