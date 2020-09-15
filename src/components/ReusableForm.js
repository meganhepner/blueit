import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control type="text" name="title" placeholder="post title" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="author" placeholder="your name" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" name="body" placeholder="body content" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="date" placeholder="date" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="picture" placeholder="image url" />
        </Form.Group>
        <div style={{ padding: 10 }}>
          <Button variant="info" type="submit">
            {props.buttonText}
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;