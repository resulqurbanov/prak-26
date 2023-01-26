import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const AddPage = () => {
  return (
    <Formik
      initialValues={{ description: "", title: "", price: "" }}
      validationSchema={Yup.object({
        description: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        title: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        price: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        axios.post(`http://localhost:9999/mehsul/`, values);
      }}
    >
      <Form>
        <label htmlFor="description">description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="title">title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="price">price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default AddPage;
