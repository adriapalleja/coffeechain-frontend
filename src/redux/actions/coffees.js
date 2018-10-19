import { namespace } from '../../constants/namespace';
import { coffeeSchema, coffeeArraySchema } from './schemas';

export const getCoffee = (coffeeId) => ({
  type: namespace.GET_COFFEE,
  api: {
    path: '/coffees/' + coffeeId,
    method: 'GET',
    schema: coffeeSchema
  }
});

export const createCoffee = (coffee, producerId) => ({
  type: namespace.CREATE_COFFEE,
  api: {
    path: '/coffees',
    method: 'POST',
    body: coffee,
    schema: coffeeSchema,
    header: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${producerId}`
    }
  }
});

export const getAllCoffees = () => ({
  type: namespace.GET_ALL_COFFEES,
  api: {
    path: '/coffees',
    method: 'GET',
    schema: coffeeArraySchema
  }
});
