import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Button } from "react-bootstrap";
//import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zjks7sn",
        "template_55dh28w",
        form.current,
        "Rv7GKV4qyBZUhlE5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been succesfully sent");
          return true;
        },
        (error) => {
          console.log("the operation is not successful");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Container className="my-container">
        <form className="my-form" ref={form} onSubmit={sendEmail}>
          <div className="form1">
            <h4>
              <label
                style={{
                  marginTop: "30px",
                  fontFamily: "Fira Sans",
                  fontWeight: "bold",
                  color: "#21325e",
                }}
              >
                Email Me
              </label>
              <br />

              <div className="form-label">
                <label>Subject: </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input-subject"
                  required
                />
                <br />
                <br />
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <br />
                <br />
                <label>Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <br />
                <br />
                {/* <label>Message: </label>
                <input name="message" placeholder="Your Message" required />
                <br />
                <br /> */}

                <label className="message">Message: </label>
                <br />
                <br />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="text-area"
                  required
                />
                <br />
                <br />
                <br />
                {/* <Button className="btn btn-success my-button btn-lg">
                  <input type="submit" value="Send" />
                </Button> */}
                <Button
                  type="submit"
                  className="btn btn-success my-button btn-lg"
                  // value="Send"
                >
                  Send
                </Button>
              </div>
            </h4>
          </div>
        </form>
      </Container>

      {/* {" "}
      <form ref={form} onSubmit={sendEmail}>
        // <label>Subject</label>
        // <br />
        // <input type="text" name="subject" />
        // <br />
        // <label>Name</label>
        // <br />
        // <input type="text" name="name" />
        // <br />
        // <label>Email</label>
        // <br />
        // <input type="email" name="email" />
        // <br />
        // <label>Message</label>
        // <br />
        // <textarea name="message" />
        // <br />
        // <input type="submit" value="Send" />
        //{" "}
      </form> */}
    </div>
  );
};
export default Contact;
