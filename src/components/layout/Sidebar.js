import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
  <Fragment>
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search article..."
          className="form-control rounded-0"
        />
        <div className="input-group-prepend">
          <button
            type="button"
            className="btn btn-outline-secondary rounded-0"
          >
            Search
          </button>
        </div>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item active rounded-0">
              Featured Authors
        </li>
        {[ 'Frank', 'Farooq', 'Manzede', 'Lilian', 'Baker', 'Timothy' ].map( ( author, key ) => (
          <li className="list-group-item rounded-0" key={ key }>
            { author }
          </li>
        ) )}
      </ul>

      <div className="tags mt-3">
        <h5>Tags</h5>
        <hr />
        <div className="buttons">
          {[ 'Frank', 'Farooq', 'Manzede', 'Lilian', 'Baker', 'Timothy' ].map( ( tag, key ) => (
            <button
              type="button"
              key={ key }
              className="btn btn-sm btn-outline-primary mr-1 mt-1"
            >
              {tag}
            </button>
          ) )}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Sidebar;
