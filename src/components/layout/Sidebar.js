import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => (
  <Fragment>
    <div>
      <form action="/search" method="GET">
      <div className="input-group mb-3">
        <input
          type="text"
          name="search"
          placeholder="Search article..."
          className="form-control rounded-0"
        />
        <div className="input-group-prepend">
          <button
            type="submit"
            className="btn btn-outline-secondary rounded-0"
          >
            Search
          </button>
        </div>
      </div>
      </form>

      <div className="list-group mt-3">
        <span className="list-group-item active rounded-0">
              Featured Authors
        </span>
        {[ 'Frank', 'Farooq', 'Manzede', 'Lilian', 'Baker', 'Timothy' ].map( ( author, key ) => (
          <Link
            to={`/search?search=${author}&searchKey=author`}
            className="list-group-item rounded-0" 
            key={ key }
          >
            { author }
          </Link>
        ) )}
      </div>

      <div className="tags mt-3">
        <h5>Tags</h5>
        <hr />
        <div className="buttons">
          {[ 'Frank', 'Farooq', 'Manzede', 'Lilian', 'Baker', 'Timothy' ].map( ( tag, key ) => (
            <Link
              to={`/search?search=${tag}&searchKey=tag`}
              key={ key }
              className="btn btn-sm btn-outline-primary mr-1 mt-1"
            >
              {tag}
            </Link>
          ) )}
        </div>
      </div>
    </div>
  </Fragment>
);

export default Sidebar;
