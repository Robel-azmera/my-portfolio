import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import {
  introdata,
  meta,
  dataabout,
  worktimeline,
  services,
  dataportfolio,
  contactConfig,
} from "../../content_option";

export const Home = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SENT! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed, try again!`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HelmetProvider>
      <div className="home-page-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Hero Section */}
        <section id="home" className="home-section">
          <div className="intro_sec d-block d-lg-flex align-items-center">
            <div
              className="h_bg-image order-1 order-lg-2 h-100"
              style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <Link to="/portfolio" className="text_2">
                      <div id="button_p" className="ac_btn btn">
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <Container>
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">About me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row className="sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">{dataabout.title}</h3>
              </Col>
              <Col lg="7" className="d-flex align-items-center">
                <div>
                  <p>{dataabout.aboutme}</p>
                </div>
              </Col>
            </Row>
            {/* <Row className="sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">Work Timline</h3>
              </Col>
              <Col lg="7">
                <table className="table caption-top">
                  <tbody>
                    {worktimeline.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.jobtitle}</th>
                          <td>{data.where}</td>
                          <td>{data.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
            </Row> */}
            <Row className="sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">Services</h3>
              </Col>
              <Col lg="7">
                {services.map((data, i) => {
                  return (
                    <div className="service_ py-4" key={i}>
                      <h5 className="service__title">{data.title}</h5>
                      <p className="service_desc">{data.description}</p>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <Container>
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">Portfolio</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt={data.description} />
                    <div className="po_title">
                      <h3>{data.description}</h3>
                    </div>
                    <div className="content">
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <Container>
            <Row className="mb-5 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">Contact Me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row className="sec_sp">
              <Col lg="12">
                <Alert
                  variant={formData.variant}
                  className={`rounded-0 co_alert ${
                    formData.show ? "d-block" : "d-none"
                  }`}
                  onClose={() => setFormdata({ show: false })}
                  dismissible
                >
                  <p className="my-0">{formData.alertmessage}</p>
                </Alert>
              </Col>
              <Col lg="5" className="mb-5">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                    {contactConfig.YOUR_EMAIL}
                  </a>
                  <br />
                  <br />
                  {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                    <p>
                      <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                    </p>
                  ) : (
                    ""
                  )}
                </address>
                <p>{contactConfig.description}</p>
              </Col>
              <Col lg="7" className="d-flex align-items-center">
                <form onSubmit={handleSubmit} className="contact__form w-100">
                  <Row>
                    <Col lg="6" className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name || ""}
                        type="text"
                        required
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="6" className="form-group">
                      <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email || ""}
                        required
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="7"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <br />
                  <Row>
                    <Col lg="12" className="form-group">
                      <button className="btn ac_btn" type="submit">
                        {formData.loading ? "Sending..." : "Send"}
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
          <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </section>
      </div>
    </HelmetProvider>
  );
};
