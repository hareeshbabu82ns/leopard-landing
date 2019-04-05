import React from 'react';

const OurTeam = () => {
  return (
    <section class="section">
      <div class="container">
        <p class="title has-text-centered is-spaced is-size-2-desktop is-size-3-tablet is-size-4-mobile">Here is our team</p>

        <div class="columns is-centered" style={{ marginTop: '1rem' }}>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image is-shadowless">
                <figure class="image is-128x128" style={{ margin: 'auto' }}>
                  <img class="is-rounded bm--img-shadow" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div class="card-content has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Person 1</h1>
                <div class="content subtitle is-size-6">
                  info about person1.
        </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image is-shadowless">
                <figure class="image is-128x128" style={{ margin: 'auto' }}>
                  <img class="is-rounded bm--img-shadow" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div class="card-content has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Person 2</h1>
                <div class="content subtitle is-size-6">
                  info about person2.
            </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card is-shadowless">
              <div class="card-image is-shadowless">
                <figure class="image is-128x128" style={{ margin: 'auto' }}>
                  <img class="is-rounded bm--img-shadow" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div class="card-content has-text-centered"
                style={{ marginTop: '1rem' }}>
                <h1 className="title is-5 is-spaced">Person 3</h1>
                <div class="content subtitle is-size-6">
                  info about person3.
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