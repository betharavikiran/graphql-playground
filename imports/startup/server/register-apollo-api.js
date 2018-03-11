import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';


import ShopsSchema from '../../api/shops/shops.graphql';
import ShopsResolvers from '../../api/shops/resolvers';

import ProductsSchema from '../../api/products/products.graphql';
import ProductsResolvers from '../../api/products/resolvers';

const typeDefs = [ShopsSchema, ProductsSchema];
const resolvers = merge(ShopsResolvers, ProductsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

console.log(JSON.stringify(schema));

createApolloServer({ schema });
