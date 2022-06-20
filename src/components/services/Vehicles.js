import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Image,
  Table,
  Dropdown,
} from "react-bootstrap";
import { FiCheck, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import SectionTitle from "../common/SectionTitle";
import { vehicleList } from "../data/vehicleList";


const Vehicles = () => {
  
   
  const [vehicles, setVehicles] = useState(vehicleList);

  const [activeVehicle, setActiveVehicle] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const vehiclesLength = 5;

  const handleStartIndex = (index) => {
    if (index < 0 || index > vehicles.length - vehiclesLength - 1) return;
    setStartIndex(index);
  };

  return (
    <Container >
      <SectionTitle title="Projelerimiz" />

      {vehicles.length > 0 && (
        <Row>
          <Col lg={3}>
            <Dropdown size="lg" className="d-lg-none vehiclesDropDown">
              <Dropdown.Toggle className="w-100">
                {vehicles[activeVehicle].model}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {vehicles.map((vehicle, index) => (
                  <Dropdown.Item
                    key={vehicle.id}
                    onClick={() => setActiveVehicle(index)}
                  >
                    {vehicle.model}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <ul className="vehicleList d-none d-lg-block">
              <li>
                <Button
                  onClick={() => handleStartIndex(startIndex - 1)}
                  disabled={startIndex <= 0}
                >
                  <FiChevronUp />
                </Button>
              </li>
              {vehicles.map((vehicle, index) => {
                if (
                  index >= startIndex &&
                  index <= startIndex + vehiclesLength
                ) {
                  return (
                    <li
                      key={vehicle.id}
                      className={index === activeVehicle ? "active" : ""}
                      onClick={() => setActiveVehicle(index)}
                    >
                      {vehicle.model}
                    </li>
                  );
                }
                return null;
              })}

              <li>
                <Button
                  onClick={() => handleStartIndex(startIndex + 1)}
                  disabled={startIndex >= vehicles.length - vehiclesLength - 1}
                >
                  <FiChevronDown />
                </Button>
              </li>
            </ul>
          </Col>
          <Col lg={5}>
            <Image
              src={`/assets/img/resimler/${vehicles[activeVehicle].image}`}
              className="img-fluid"
            />
          </Col>
          <Col lg={3}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h3>{vehicles[activeVehicle].pricePerDay} </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="50%">Ürün Kategorisi</td>
                  <td>{vehicles[activeVehicle].ürünKategorisi}</td>
                </tr>                  
                <tr>
                  <td>Stok Durumu</td>
                  <td>
                    {vehicles[activeVehicle].stokDurumu ? (
                      <FiCheck />
                    ) : (
                      <FiX />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Ürünün Eklenme Tarihi</td>
                  <td>{vehicles[activeVehicle].ürününEklenmeTarihi}</td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <h3>Fiyat için iletişime geçiniz.</h3>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Vehicles;
