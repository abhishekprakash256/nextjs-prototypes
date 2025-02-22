import { Container, Row, Col } from 'react-bootstrap';
import "./CustomBody.css"


import React, { ReactNode } from 'react';


interface CustomBodyProps {
  children: ReactNode; // This defines the type for children
}

const CustomBody: React.FC<CustomBodyProps> = ({ children }) => {
  return (
    <div className="custom-body">
      <Container>
        <Row>
          <Col>
            {children} {/* This will render the children components passed to CustomBody */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomBody;
