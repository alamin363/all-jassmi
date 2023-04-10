import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import NavHero from "../header/NavHero";

const Challenge = () => {
  return (
    <div className="slider">
      <div className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0">
      <section
        className="page-title page-title-layout1 text-center bg-overlay bg-overlay-gradient bg-parallax banner_img-2"
        style={{
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(6, 57, 70, 0.8)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
              <h1 className="pagetitle__heading">
                Help Challenge Critical Activities
              </h1>
              <p className="pagetitle__desc">
                We are experienced professionals who understand that It services
                is changing, and are true partners who care about your success.
              </p>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Link
                  href="service_details.html"
                  className="btn btn__primary mx-3"
                >
                  Our Services
                </Link>
              </div>
              <NavHero />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Challenge;
