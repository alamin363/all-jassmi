import React from 'react'

const ContactHeroSection = () => {
  return (
    <section class="slider">
    <div
      class="slide-item align-v-h bg-overlay bg-overlay-gradient contact-common-header-bg"
      style={{
        height: "410px",
        backgroundBlendMode: " multiply",
        backgroundColor: "rgba(6, 57, 70, 0.8)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2
              style={{
                fontSize: "54px",
                color: "white",
                textAlign: "center",
              }}
            >
              CONTRACT US
            </h2>
          </div>
          {/* <!-- /.col-xl-7 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
    {/* <!-- /.slide-item --> */}
  </section>
  )
}

export default ContactHeroSection