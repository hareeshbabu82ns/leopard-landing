import React from 'react';

const AdditionalServices = () => {
  return (
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title  is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">
          Our Capturing Trucks & Warehouse Sectors
        </h1>
        <h2 class="subtitle is-5 is-size-6-tablet">
          Who are in extremely love with eco friendly system..
        </h2>

        <div class="columns is-centered" style={{ marginTop: '1rem' }}>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image bm--card-img-zoom">
                <figure class="image is-16by9 ">
                  <img src="../images/trucks_001.jpg" alt="Service 1" class=" " />
                </figure>
              </div>
              <div class="card-content is-paddingless has-text-centered" style={{ marginTop: '1rem' }}>
                <h1 className="title is-4">Trucks and Trailers</h1>
                <div class="content subtitle is-size-6">
                  With our fleat of trucks we provide services all over Alberta, including handling CP
                  and CN containers. Reefer, Dry Triaxles, Tandem Reefers and 5Ton Trucks with Tailgate.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image bm--card-img-zoom">
                <figure class="image is-16by9">
                  <img src="../images/wharehouse_002.jpg" alt="Service 2" />
                </figure>
              </div>
              <div class="card-content is-paddingless has-text-centered" style={{ marginTop: '1rem' }}>
                <h1 className="title is-4">Warehouse and Services</h1>
                <div class="content subtitle is-size-6">
                  Spacious Storage facilities for your Freight. Rework of skids, crossdock facility.
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
