import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-cove-48984.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <h1 className="mt-5 text-success">Our main Services:</h1>
      <h4 className="text-danger">
        *Please "view details" information before your tour planning*
      </h4>
      <Row xs={1} md={2} className="g-5 mt-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
