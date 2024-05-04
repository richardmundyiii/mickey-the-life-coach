import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const serviceId = "service_z64zbpt";
    const templateId = "template_636i0vx";
    const publicKey = "bKtGueedgAwVyZLnK";

    emailjs
      .sendForm(serviceId, templateId, evt.target, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <Form className="emailForm" onSubmit={handleSubmit}>
      <Form.Group className="m-3">
        <Form.Control
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Control
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Control
          as="textarea"
          cols="30"
          rows="10"
          type="text"
          placeholder="Your name"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Send Message
        </Button>
      </Form.Group>
    </Form>
  );
}
