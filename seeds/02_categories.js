
exports.seed = function(knex, Promise) {

  let data = [
    {id: 1, name: 'rum'},
    {id: 2, name: 'whiskey'},
    {id: 3, name: 'gin'},
    {id: 4, name: 'vodka'},
    {id: 5, name: 'tequila'},
    {id: 6, name: 'brandy'},
    {id: 7, name: 'liqueur'},
    {id: 8, name: 'vermouth'},
    {id: 9, name: 'juice'},
    {id: 10, name: 'wine'},
    {id: 11, name: 'soda'},
    {id: 12, name: 'bitters'},
    {id: 13, name: 'syrup'},
    {id: 14, name: 'garnish'},
    {id: 15, name: 'ice'},
    {id: 16, name: 'grocery'}, //dairy, eggs, leaves, fruit chunks

    // {id: , name: ''},
];//closes data array

  return knex('categories').del()
    .then(() => {
      return knex('categories').insert(data);})
    .then(() => {
      return knex.raw("SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))");
    });
};
