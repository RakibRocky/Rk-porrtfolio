import React, { useEffect, useState } from "react";
// import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Contact = () => {
  // const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1w8qjkq",
        "template_6suazxi",
        form.current,
        "7U14EXht8V1vukRd_"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="container contact-page p-10 flex 
      justify-around w-100% gap-5"
      >
        <div className="flex-1">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-zone"
          >
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Contact Me
              {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            /> */}
            </h1>
            <p>
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="contact-form"
            >
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-1  items-center hidden lg:block">
          {/* <div className="info-map">
              Slobodan Gajić,
              <br />
              Serbia,
              <br />
              Branka RadiČevića 19, 22000 <br />
              Sremska Mitrovica <br />
              <br />
              <span>freelancerslobodan@gmail.com</span>
            </div> */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="map-wrap"
          >
            <MapContainer
              center={[23.461086149984716, 91.17936128222037]}
              zoom={13}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[23.461086149984716, 91.17936128222037]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [35, 60],
                    iconAnchor: [14, 60],
                  })
                }
              >
                <Popup>Rocky lives here...</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Contact;
