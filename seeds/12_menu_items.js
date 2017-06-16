
exports.seed = function(knex, Promise) {
  let data = [
    {menu_id: 1,
    recipe_id: 1},
    {menu_id: 2,
    recipe_id: 3},
    {menu_id: 3,
    recipe_id: 2},
    {menu_id: 4,
    recipe_id: 2},
    {menu_id: 4,
    recipe_id: 1},
    {menu_id: 4,
    recipe_id: 3},
    {menu_id: 5,
    recipe_id: 1},
    {menu_id: 5,
    recipe_id: 2},
    {menu_id: 1,
    recipe_id: 2},
    {menu_id: 1,
    recipe_id: 3},
    {menu_id: 6,
    recipe_id: 3},
    {menu_id: 6,
    recipe_id: 2},
    {menu_id: 6,
    recipe_id: 1},
    {menu_id:7,
    recipe_id: 5},
    {menu_id:7,
    recipe_id: 6},
    {menu_id:7,
    recipe_id: 9},
    {menu_id:7,
    recipe_id: 10},
    {menu_id:7,
    recipe_id: 12},
    {menu_id:7,
    recipe_id: 15},
    // {menu_id:,
    // recipe_id: },
  ];

  return knex('menu_items').del()
    .then(() => {
      return knex('menu_items').insert(data);});
  };
