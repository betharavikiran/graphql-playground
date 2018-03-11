import Shops from './shops';
import Products from '../products/products';

export default {
  Query: {
    shops(obj, args, { userId }) {
      return Shops.find({}).fetch();
    },
  },

  Shop: {
    products: shop =>
      Products.find({
        shopId: shop._id,
      }).fetch(),
  },

  Mutation: {
    createShop(obj, { name }, { userId }) {
      const shopId = Shops.insert({
        name,
      });
      return Shops.findOne(shopId);
    },
  },
};
