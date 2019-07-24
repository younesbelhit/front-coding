import React from 'react';
import {
    Card, Container, Row, Col, Badge, Button
} from 'reactstrap';
import Seacrh from './../Search/';

const Template = (component) => {
    const {
        repositories
    } = component.state;
    return (
        <React.Fragment>
            <Container>
                <Seacrh />
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <ul className="list-unstyled">
                            {repositories.map(repository => {
                                return (
                                    <li style={{ marginBottom: '20px' }} key={repository.id}>
                                        <Card>
                                            <Row>
                                                <Col sm={{ size: 4 }}>
                                                    <img width="180" height="180" className="img-responsive" src={repository.owner.avatar_url + '&w=318&h=180'} alt="Card image cap" />
                                                </Col>
                                                <Col sm={{ size: 8 }}>
                                                    <h2> {repository.full_name} </h2>
                                                    <p> {repository.description} </p>
                                                    <Badge href="#" color="primary"> Stars :  {repository.stargazers_count} </Badge>
                                                     &nbsp;
                                                    <Badge href="#" color="secondary"> Issues : {repository.open_issues_count}</Badge>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default Template;
