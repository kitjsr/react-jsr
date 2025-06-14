import React from "react";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Table } from "react-bootstrap";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}
function validatePassword(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid password";
  }
  return error;
}

export const Formik1 = () => {
  return (
    <div>
      <Container>
        <h2>FORM</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, validateField, validateForm }) => (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" validate={validatePassword}/>
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}

                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </Form.Text>
              </Form.Group>
            

              <Button
                type="button"
                onClick={() => validateForm().then(() => console.log("blah"))}
              >
                Validate All
              </Button>
              <br></br>
              <br></br>
              <Button type="submit"  variant="primary">Submit</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};
