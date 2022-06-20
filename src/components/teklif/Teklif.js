import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import MaskInput from "react-maskinput/lib";


const Teklif = () => {
  

  const initialValues = {
    firmaAdı: "",
    yetkiliKişi: "",
    email: "",
    telefon: "",
    konu: "",
    
  };

  const validationSchema = Yup.object({
    firmaAdı: Yup.string().required("Lütfen firma adı giriniz."),
    yetkiliKişi: Yup.string().required("Lütfen yetkili kişi giriniz."),
    email: Yup.string().email().required("Lütfen email adresinizi giriniz."),
    telefon: Yup.string().required("Lütfen telefon numaranızı giriniz.")
    .test("includes_","Please enter a valid phone number", (value)=> value && !value.includes("_") ),
    konu: Yup.string().required("Lütfen iletişime geçmek istediğiniz konuyu giriniz."),
   
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Firma Adı*</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("firmaAdı")}
                    isInvalid={!!formik.errors.firmaAdı}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Yetkili Kişi*</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("yetkiliKişi")}
                    isInvalid={!!formik.errors.yetkiliKişi}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.yetkiliKişi}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Telefon Numarası*</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("telefon")}
                    isInvalid={!!formik.errors.telefon}
                    as={MaskInput}
                    maskChar="_"
                    mask="(000) 000-0000"
                    alwaysShowMask
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.telefon}
                  </Form.Control.Feedback>
                </Form.Group>             

                <hr />

                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    {...formik.getFieldProps("email")}
                    isInvalid={!!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Konu*</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("konu")}
                    isInvalid={!!formik.errors.konu}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.konu}
                  </Form.Control.Feedback>
                </Form.Group>

              

                <Button variant="primary" type="submit">
                  GÖNDER
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Teklif;
