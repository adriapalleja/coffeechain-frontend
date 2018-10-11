import {  schema } from 'normalizr';

const coffeeSchema = new schema.Entity('coffees', {}, { idAttribute: 'id'});
const coffeeArraySchema = new schema.Array(coffeeSchema);

const producerSchema = new schema.Entity('producers', {}, { idAttribute: 'id'});
const producerArraySchema = new schema.Array(producerSchema);

const coffeeShopSchema = new schema.Entity('coffeeShops', {}, { idAttribute: 'id'});
const coffeeShopArraySchema = new schema.Array(coffeeShopSchema);

export { coffeeSchema, coffeeArraySchema, producerSchema, producerArraySchema, coffeeShopSchema, coffeeShopArraySchema };