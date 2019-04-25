import React from 'react';

const OurTeam = () => {
  return (
    <section class="section">
      <div class="container">
        <p class="title has-text-centered is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Managing Director</p>

        <div class="columns is-centered" style={{ marginTop: '1rem' }}>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image is-shadowless">
                <figure class="image is-128x128" style={{ margin: 'auto' }}>
                  <img class="is-rounded bm--img-shadow" src="../images/director_gill.jpg" />
                </figure>
              </div>
              <div class="card-content has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Narinder Gill</h1>
                <div class="content subtitle is-size-6">
                  15 years of experiance in trucking industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
