
exports.seed = function(knex, Promise) {
  let data = [
    {id: 1,
    menu_name: 'Favorites',
    user_id: 1},
    {id: 2,
    menu_name: 'Favorites',
    user_id: 2},
    {id: 3,
    menu_name: 'Favorites',
    user_id: 3},
    {id: 4,
    menu_name: 'Favorites',
    user_id: 4},
    {id: 5,
    menu_name: 'My Cocktails',
    user_id: 4},
    {id: 6,
    menu_name: 'My Cocktails',
    user_id: 1},
    {id: 7,
    menu_name: 'Laissez les bons temps rouler',
    user_id: 1},
    {id: 8,
    menu_name: 'Quiet Get-together',
    user_id: 4},
    // {id: ,
    //   menu_name: '',
    //   user_id: },
  ];

    return knex('menus').del()
      .then(() => {
        return knex('menus').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('menus_id_seq', (SELECT MAX(id) FROM menus))");
      });
  };
