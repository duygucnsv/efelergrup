import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import { FiHome } from "react-icons/fi";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col>
            <div className="header-content">
              <h1>{title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-decoration-none">
                      <FiHome /> Anasayfa
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHeader;
