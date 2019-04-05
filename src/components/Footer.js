import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <footer class="footer" style={{ backgroundColor: 'hsl(228, 70%, 10%)' }}>
      <section class="columns is-centered">
        <div class="column">
          <h1 class="title is-5 has-text-grey-lighter">About Us</h1>
          <h2 class="subtitle is-6 has-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </h2>
        </div>
        <div class="column">
          <h1 class="title is-5 has-text-grey-lighter">Newsletter</h1>
          <h2 class="subtitle is-6 has-text-grey">
            Stay update with our latest
          </h2>
          <div class="field has-addons">
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="email" placeholder="Email" />
              <span class="icon is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <div class="control">
              <button class="button is-info is-small">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <h1 class="title is-5 has-text-grey-lighter">Follow Us</h1>
          <h2 class="subtitle is-6 has-text-grey">
            Let us be social
          </h2>
          <div className="level" style={{ justifyContent: 'flex-start' }}>
            <span className="icon"><i class="fab fa-facebook-f"></i></span>
            <span className="icon"><i class="fab fa-twitter"></i></span>
            <span class="icon is-left">
              <i class="fab fa-instagram"></i>
            </span>
            <span class="icon is-left">
              <i class="fas fa-globe"></i>
            </span>
          </div>
        </div>
      </section>
      <section class="columns" style={{ marginTop: '1rem' }}>
        <div class="column content has-text-centered">
          <p class="is-size-6 has-text-grey">
            Copyright &copy; 2019 All rights reserved | <a href="mailto://hareeshbabu82@gmail.com">Hareesh Polla</a>. <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default footer;
