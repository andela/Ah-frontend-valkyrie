import React from 'react';
import axios from 'axios';

const baseUrl = 'https://ah-backend-valkyrie-staging.herokuapp.com/api/v1/';

const putPostConfig = ( method, body = null ) => {
  const upperCasedMethod = method.toUpperCase();
  const token = window.localStorage.getItem( 'auth_token' );
  const config = {
    method: upperCasedMethod,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${ token }`,
    },
    mode: 'no-cors',
  };

  if ( [ 'POST', 'PUT' ].includes( upperCasedMethod ) ) {
    config.data = body;
  }
  return config;
};

const getConfig = ( method ) => {
  const upperCasedMethod = method.toUpperCase();
  const config = {
    method: upperCasedMethod,
    headers: {
      Accept: 'application/json',
    },
  };
  return config;
};

export const getResource = url => axios(
  `${ baseUrl }${ url }`, getConfig( 'GET' ),
);

export const getSingleResource = url => axios(
  `${ baseUrl }${ url }`, getConfig( 'GET' ),
);

export const createResource = ( url, resourceData ) => axios(
  `${ baseUrl }${ url }`,
  putPostConfig( 'POST', resourceData ),
);

export const removeResource = url => axios(
  `${ baseUrl }${ url }`,
  putPostConfig( 'DELETE' ),
);

export const updateResource = ( url, resourceToEdit ) => axios(
  `${ baseUrl }${ url }`,
  putPostConfig( 'PUT', resourceToEdit ),
);
