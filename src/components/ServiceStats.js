import React from 'react';
import './ServiceStats.css'

const ServiceStats = () => {
  return (
    <section class="section stats-background has-text-grey-lighter">
      <div class="columns is-vcentered" style={{ minHeight: '10rem' }}>
        <div class="column has-text-centered">
          <div>
            <p class="heading">Projects</p>
            <p class="title has-text-grey-lighter">3K+</p>
          </div>
        </div>
        <div class="column has-text-centered">
          <div>
            <p class="heading">Total Employees</p>
            <p class="title has-text-grey-lighter">20</p>
          </div>
        </div>
        <div class="column has-text-centered">
          <div>
            <p class="heading">Happy Customers</p>
            <p class="title has-text-grey-lighter">70</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;
