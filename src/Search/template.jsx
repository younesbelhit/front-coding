import React from 'react';
import {
    Container, Row, Col,
    FormGroup, Form, Input
} from 'reactstrap';

const Template = (component) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="search" id="search" placeholder="Search" onChange={component.handleChange} />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Template;
