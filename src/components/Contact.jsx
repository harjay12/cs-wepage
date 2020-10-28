import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Image } from "react-bootstrap";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const [press, setpress] = useState(false);
  const pressHandler = () => {
    setpress(!press);
  };

  return (
    <>
      <div className="container">
        <div class="row">
          <div class="column">
            <Image src="/img&vid/BearGrid-2.png" className="img" />
          </div>

          <div className="column">
            <div className={press ? "text-Cont " : ""}>
              <h1 style={{ fontStyle: "italic", textAlign: "center" }}>
                Contact Us
              </h1>
              <p style={{ textAlign: "center" }}>
                Here at BSU CS club we are here to help you can reach us at any
                time and we will get back to you.
              </p>
              <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>
                BSU Computer Science Club
              </h2>

              <div style={{ textAlign: "center", padding: "20px" }}>
                <button
                  className="button1"
                  onClick={pressHandler}
                  type="submit"
                >
                  Click Here to Message Us!
                </button>
              </div>
            </div>

            <div className={press ? "activeCol-50 " : "column-off"}>
              <form onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-50">
                    <label for="fname ">
                      First Name <span class="required-field"></span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your name.."
                      required
                    />
                  </div>

                  <div class="col-50">
                    <label for="lname">
                      Last Name <span class="required-field"></span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Your last name.."
                      required
                    />
                  </div>
                  <div class="col-50">
                    <label for="Email">
                      Email <span class="required-field"></span>
                    </label>
                    <input
                      id="Email"
                      className="text-input"
                      type="text"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div class="col-50">
                    <label for="Subject">Subject</label>
                    <input
                      id="Subject"
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div class="col-text">
                    <label>Message</label>

                    <textarea
                      name="message"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <div className=" col-50 ">
                    <button className="button2 " type="submit">
                      Send Me
                    </button>
                  </div>
                </div>
              </form>
              <div style={{ textAlign: "center" }}>
                <button
                  className="button3"
                  onClick={pressHandler}
                  type="submit"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
