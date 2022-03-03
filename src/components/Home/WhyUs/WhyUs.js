import React from "react";
import { Accordion, Container } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-success">WHY CHOOSE US?</h1>
      <h3 className="text-warning">
        There are basic principles that we consistently uphold:
      </h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Our Speed</Accordion.Header>
          <Accordion.Body className="text-info">
            Travel Agent will provide you comprehensive range of travel services
            in specific term of your desire rather. Example: when you make
            travel packages, it is included free return airport transfer, there
            is professional tour guide will explain you about Bali correctly,
            spa, adventures and other activities that what the client needs..
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Reliability</Accordion.Header>
          <Accordion.Body className="text-info">
            The travel agency will offer you the cheaper price quotation than
            when you make direct booking online to the properties.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Simplicity</Accordion.Header>
          <Accordion.Body className="text-info">
            Travel agent will provide you clear and precise information
            according with your desire through email or other tools
            communications. The travel agent will do the maximum effort to
            fulfill all your needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>comfortable</Accordion.Header>
          <Accordion.Body className="text-info">
            You can do one stop shopping at travel agency where the travel agent
            relatively has the ability to arrange your holiday trips when you
            make the booking more than one activity as well as destinations. It
            will make your holidays more efficient, easy, relax and comfortable.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default WhyUs;
