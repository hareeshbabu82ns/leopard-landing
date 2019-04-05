import React from 'react';

const ContactBar = () => {
  return (
    <section style={{
      backgroundColor: 'hsl(228, 70%, 10%)',
      padding: '.5rem 1.5rem',
      marginTop: "2rem"
    }}>
      <nav className="level has-text-light is-touch">
        <div class="level-left">
        </div>
        <div class="level-right is-marginless">
          <p class="level-item">
            <span class="icon is-left">
              <i class="fas fa-phone"></i>
            </span>&nbsp;
              <a href="tel:+5875357133">+(587)535-7133</a>
          </p>
          <p class="level-item">
            <span class="icon is-left">
              <i class="fas fa-envelope"></i>
            </span>&nbsp;
              <a href="mailto:dispatch@leopardtransportltd.com">
              dispatch@leopardtransportltd.com</a>
          </p>
        </div>
      </nav>
    </section>
  );
};

export default ContactBar;
