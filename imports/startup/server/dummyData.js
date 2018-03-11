import { Meteor } from 'meteor/meteor';
import Shops from './../../api/shops/shops';
import Products from './../../api/products/products';

if (Meteor.isServer) {
  if (Shops.find().count() === 0) {
    Shops.insert({ _id: 'AhqvtuMcXQPCRitML', name: 'Ravi\'s Store' });
    Products.insert({
      shopId: 'AhqvtuMcXQPCRitML', name: 'Ravi first product', price: 20, inStock: false,
    });
    Products.insert({
      shopId: 'AhqvtuMcXQPCRitML', name: 'Ravi second product', price: 25, inStock: false,
    });
    Products.insert({
      shopId: 'AhqvtuMcXQPCRitML', name: 'Ravi third product', price: 30, inStock: false,
    });
    Products.insert({
      shopId: 'AhqvtuMcXQPCRitML', name: 'Ravi forth product', price: 25, inStock: false,
    });

    Shops.insert({ _id: 'BhqvtuMcXQPCRitML', name: 'Kiran\'s Store' });

    Products.insert({
      shopId: 'BhqvtuMcXQPCRitML', name: 'Kiran first product', price: 20, inStock: false,
    });
    Products.insert({
      shopId: 'BhqvtuMcXQPCRitML', name: 'Kiran second product', price: 25, inStock: false,
    });
    Products.insert({
      shopId: 'BhqvtuMcXQPCRitML', name: 'Kiran third product', price: 30, inStock: false,
    });
    Products.insert({
      shopId: 'BhqvtuMcXQPCRitML', name: 'Kiran forth product', price: 25, inStock: false,
    });


    Shops.insert({ _id: 'ChqvtuMcXQPCRitML', name: 'Teja\'s Store' });

    Products.insert({
      shopId: 'ChqvtuMcXQPCRitML', name: 'Teja first product', price: 20, inStock: false,
    });
    Products.insert({
      shopId: 'ChqvtuMcXQPCRitML', name: 'Teja second product', price: 25, inStock: false,
    });
    Products.insert({
      shopId: 'ChqvtuMcXQPCRitML', name: 'Teja third product', price: 30, inStock: false,
    });
    Products.insert({
      shopId: 'ChqvtuMcXQPCRitML', name: 'Teja forth product', price: 25, inStock: false,
    });
  }
}
