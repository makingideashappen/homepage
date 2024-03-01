import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 12px 0;
  }
  button {
    width: 120px;
    height: 48px;
    background: rgba(0, 0, 0, 0.95);
    padding: 6px 0px;
    color: rgb(248, 248, 248);
    font-size: 1em;
    font-weight: bold;
  }
  textarea {
    min-height: 200px;
    border-radius: 0.2233rem;
    border: 1px solid black;
  }
  input {
    border: 1px solid black;
    border-radius: 0.2233rem;
  }
`;

const form = ({ className }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        // fetch("/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   body: encode({ "form-name": "contact-demo", ...values })
        // })
        //   .then(() => {
        //     alert("Success");
        //     actions.resetForm();
        //   })
        //   .catch(() => {
        //     alert("Error");
        //   })
        //   .finally(() => actions.setSubmitting(false));
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = "Name failure";
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Email failure";
        }
        if (!values.message) {
          errors.message = "Message failure";
        }
        return errors;
      }}
    >
      {() => (
        <Form className={className} name="contact-demo" data-netlify={true}>
          <label htmlFor="name">1. Please let know who are you</label>
          <Field name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="email">2. Contact email or phone</label>
          <Field name="email" />
          <ErrorMessage name="email" />
          <label htmlFor="message">3. Your message of interest...</label>
          <Field name="message" component="textarea" />
          <ErrorMessage name="message" />
          <br />
          <br />
          <button type="submit">{"send!"}</button>
        </Form>
      )}
    </Formik>
  );
};

const wrappedForm = () => <Wrap>{form("lol")}</Wrap>;
export default wrappedForm;
