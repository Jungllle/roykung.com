import React from "react";
import { Col, Row } from "react-bootstrap";

const Copyright = () => {
  return (
    <Row className="mx-auto text-center my-5">
      <Col>
        {`Copyright © 2013 - ${new Date().getFullYear()} `}
        <a href={`/`}>Roy Lin </a>
        All Rights Reserved.
      </Col>
    </Row>
  );
};

export default Copyright;
