import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/Para.css"; // Custom CSS

interface ParaProps {
  description: string;
}

const Para: React.FC<ParaProps> = ({ description }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col>
          <p className="mb-1 mt-1 font-color-class bio-desc justify-content">
            {description}  {/* Renders plain text safely */}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Para;
