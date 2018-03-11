import Products from './products';

export default {
  Mutation: {
    createProduct(obj, { name, shopId, price }, { userId }) {
      if (userId) {
        const productId = Products.insert({
          name,
          shopId,
          price,
          inStock: true,
        });
        return Products.findOne(productId);
      }
      throw new Error('Unauthorized');
    },
  },
};
