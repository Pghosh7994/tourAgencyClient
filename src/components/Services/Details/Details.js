import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "./../../../Hooks/useFirebase";

const Details = () => {
  const { serviceId } = useParams();
  const { user } = useFirebase();

  const [details, setDetails] = useState([]);
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch("https://peaceful-cove-48984.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //  find out data by matching serviceId
  useEffect(() => {
    const found = details.find((o) => o._id === serviceId);
    setResult(found);
  }, [details]);

  const handleOrder = () => {
    const service = result.service;
    const imageUrl = result.imageUrl;
    const description = result.description;
    const cost = result.cost;
    const status = result.status;
    const serviceId = result._id;
    const emailOrName = user.email || user.displayName;
    const order = {
      service,
      imageUrl,
      description,
      cost,
      status,
      serviceId,
      emailOrName,
    };
    fetch("https://peaceful-cove-48984.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added your confirmation.");
        }
      });
  };

  return (
    <div className="card-style2 container">
      <Card>
        <Card.Header as="h2">{result?.service}</Card.Header>
        <img src={result?.imageUrl} height="350px" alt="" />

        <Card.Body className="bg-info p-2">
          <h1>
            Total cost for visiting this area:{" "}
            <span className="text-danger"> {result?.cost}</span> BDT
          </h1>
          <h6>
            About {result?.service} : {result?.description}
          </h6>
          <br />
          <Link to={`/services/${serviceId}`}>
            <button onClick={handleOrder} className="bg-success p-2">
              Click me for confirm
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
