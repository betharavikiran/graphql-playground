import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

import CreateShopForm from './CreateShopForm';


const Shops = ({
  loading, shops, client, user,
}) => {
  if (loading) return null;
  return (
    <div>
      <h3>Shops</h3>
      <ul>
        {shops.map(shop => (
          <li key={shop._id}>
            <h3>{shop.name}</h3>
          </li>
                  ))}
      </ul>
      <CreateShopForm />
    </div>
  );
};

const shopsQuery = gql`
  query Shops {
      shops {
          _id,
          name,
      }
  }  
`;


export default graphql(shopsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(Shops));
