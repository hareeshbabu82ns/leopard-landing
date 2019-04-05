import React from 'react';

const Services = () => {
  return (
    <section class="section">
      <div className="container">
        <div class="columns is-centered" style={{ marginTop: '1rem' }}>
          <div class="column">
            <div class="card is-shadowless bm--card-equal-height">
              <div class="card-image is-shadowless has-text-centered">
                <span class="icon bm--icon-xlarge" >
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x has-text-warning"></i>
                    <i class="fas fa-shipping-fast fa-stack-1x"></i>
                  </span>
                </span>
              </div>
              <div class="card-content is-paddingless has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">City and Alberta Deliveries</h1>
                <div class="content subtitle is-size-6 has-text-justified">
                  Our Reafer and Dry Trailer transport distribution network in Alberta ensures that our customers receive the best possible freight transport solutions available. We transport goods to all major cities in Alberta.
            </div>
              </div>
            </div>
          </div>
          <div class="column ">
            <div class="card is-shadowless bm--card-equal-height">
              <div class="card-image is-shadowless has-text-centered">
                <span class="icon bm--icon-xlarge">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x has-text-warning"></i>
                    <i class="fas fa-rocket fa-stack-1x"></i>
                  </span>
                </span>
              </div>
              <div class="card-content is-paddingless has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Shipping Containers and Trailers</h1>
                <div class="content subtitle is-size-6 has-text-justified">
                  Leopord is ideally placed to service our customers effectively and efficiently with an excellent range of Container & Trailer services. Including packing and unpacking services and warehousing and movement of import/export shipping containers between the CP Container and our clients’ premises.
            </div>
              </div>
            </div>
          </div>
          <div class="column ">
            <div class="card is-shadowless bm--card-equal-height">
              <div class="card-image is-shadowless has-text-centered">
                <span class="icon bm--icon-xlarge">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x has-text-warning"></i>
                    <i class="fas fa-building fa-stack-1x"></i>
                  </span>
                </span>
              </div>
              <div class="card-content is-paddingless has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Wherehouse Services</h1>
                <div class="content subtitle is-size-6 has-text-justified">
                  Our warehousing sites in Calgary close to Airport cover more than 9500ft². Leopord Transport’s Warehousing services offer long and short-term storage solutions to meet all of your requirements.
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
