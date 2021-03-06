
exports.seed = function(knex, Promise) {
  let data = [
    {id:1,
      name: "Mai Tai",
      description: "boozy rum drink",
      instructions: "shake with ice and serve with upside down lime hull and mint sprig.",
      template: false,
      attributed_to: "Trader Vic",
      posted_by: 4,
      variant_of: null
    },
    {id:2,
      name: "Jungle Bird",
      description: "Perhaps the best tiki drink there is!",
      instructions: "shake with ice and serve in glass with ice and a mint sprig.",
      template: false,
      attributed_to: "",
      posted_by: 4,
      variant_of: null
    },
    {id:3,
      name: "Old Fashioned",
      description: "The original cocktail",
      instructions: "Build in a glass with ice and serve in a double rocks glass.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },

    {id:4,
      name: "Jon\'s Broken 'Dakkiri'",
      description: "The ultimate showcase for rum.",
      instructions: "Shake with ice and serve up in a coupe glass.",
      template: false,
      attributed_to: "",
      posted_by: 4,
      variant_of: null
    },

    {id:5,
      name: "Zombie",
      description: "Legend has it that Donn Beach originally concocted the Zombie to help a hung-over customer get through a business meeting. The customer returned several days later to complain that he had been turned into a zombie for his entire trip. Its smooth, fruity taste works to conceal its extremely high alcoholic content. Don the Beachcomber restaurants limit their customers to two Zombies apiece.",
      instructions: "Add all the ingredients into a cocktail mixer with ice and shake, then pour into a hurricane glass.",
      template: false,
      attributed_to: "Donn Beach",
      posted_by: 1,
      variant_of: null
    },
    {id:6,
      name: "Sazerac",
      description: "The Sazerac is a local New Orleans cocktail, named for the Sazerac de Forge et Fils brand of Cognac brandy that served as its original main ingredient. Some claim it is the oldest known American cocktail, with origins in pre–Civil War New Orleans.",
      instructions: "Stir all ingredients in a mixing glass with ice and strain into a double rocks glass.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },
    {id:7,
      name: "Americano",
      description: 'The cocktail was first served in creator Gaspare Campari\'s bar, Caffè Campari, in the 1860s. It was originally known as the "Milano-Torino" because of its ingredients: Campari, the bitter liqueur, is from Milan (Milano) and Punt e Mes, the vermouth, is from Turin (Torino). There is a popular belief that in the early 1900s, the Italians noticed a surge of Americans who enjoyed the cocktail. As a compliment to the Americans, the cocktail later became known as the "Americano".',
      instructions: "Build liquors in a glass with ice, splash with soda and serve with a lemon twist.",
      template: false,
      attributed_to: "Gaspare Campari",
      posted_by: 1,
      variant_of: null
    },
    {id:8,
      name: "Negroni",
      description: "While the Negroni\'s origins are unknown, the most widely reported account is that it was first mixed in Florence, Italy, in 1919, at Caffè Casoni. Count Camillo Negroni concocted it by asking the bartender, Fosco Scarselli, to strengthen his favorite cocktail, the Americano, by adding gin rather than the normal soda water. ",
      instructions: "Build in a glass with ice, stir and serve in a double rocks glass.",
      template: false,
      attributed_to: "Count Camillo Negroni",
      posted_by: 1,
      variant_of: 7
    },
    {id:9,
      name: "Boulevardier",
      description: "The boulevardier cocktail is ascribed to Erskine Gwynne, an American-born writer who founded a monthly magazine in Paris called Boulevardier, which appeared from 1927 to 1932. The boulevardier is similar to a Negroni, sharing two of its three ingredients. It is differentiated by its use of bourbon whiskey or rye whiskey as its principal component instead of gin. Paul Clark says of this replacement: 'A simple substitution? Hardly. The bittersweet interplay between Campari and vermouth remains, but the whiskey changes the storyline. Where the Negroni is crisp and lean, the Boulevardier is rich and intriguing. There's a small difference in the preparation, but the result is absolutely stunning.'",
      instructions: "Build in a glass with ice, stir and serve in a double rocks glass.",
      template: false,
      attributed_to: "Erskine Gwynne",
      posted_by: 1,
      variant_of: 8
    },
    {id:10,
      name: "Corn N Oil",
      description: "A Corn N Oil is a cocktail most noted for its use of the very dark and oil-like blackstrap rum. While the origins of its name are largely unknown, this drink looks like a stiff jolt of Texas crude in the glass, but tastes nice and soothing.",
      instructions: "Build in a glass with ice, squeeze limes and serve in a double rocks glass.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },
    {id:11,
      name: "Daiquiri",
      description: "The perfectly balanced combination of sweet, sour and spirit is refreshing and tangy, Daiquiri is also the name of a beach and an iron mine near Santiago de Cuba, and is a word of Taíno origin. The drink was supposedly invented by an American mining engineer, named Jennings Cox, who was in Cuba at the time of the Spanish–American War.",
      instructions: "Shake with ice and serve in a chilled coupe.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },
    {id:12,
      name: "Hemingway Daiquiri",
      description: 'In his 2001 book Straight Up or On the Rocks, William Grimes claims that Ernest Hemingway "often worked his way through about a dozen of these lime slurpees, sometimes ordering doubles, which became known as Papa Dobles."',
      instructions: "Fill a cocktail shaker with ice. Add all of the remaining ingredients except the lime and shake well. Strain into a chilled coupe and garnish with the lime wheel.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: 11
    },
    {id:13,
      name: "Martini",
      description: 'The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages. H. L. Mencken called the martini "the only American invention as perfect as the sonnet" and E. B. White called it "the elixir of quietude"',
      instructions: "Stir (never shake, Mr. Bond) the liquid ingredients over ice and strain into a chilled martini glass, garnish with twist.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },
    {id:14,
      name: "Manhattan",
      description: 'A popular history suggests that the drink originated at the Manhattan Club in New York City in the early 1870s, where it was invented by Dr. Iain Marshall for a banquet hosted by Lady Randolph Churchill (mother of Winston) in honor of presidential candidate Samuel J. Tilden. The success of the banquet made the drink fashionable, later prompting several people to request the drink by referring to the name of the club where it originated—"the Manhattan cocktail".',
      instructions: "Stir the liquid ingredients over ice and strain into a chilled martini glass, garnish with cherry.",
      template: false,
      attributed_to: "Dr. Iain Marshall",
      posted_by: 1,
      variant_of: null
    },
    {id:15,
      name: "French 75",
      description: 'According to Ted Haigh (aka Dr. Cocktail), the French 75 is one of two cocktails named after the French 75-mm field gun, which was commonly used in World War I. "One barman in 1947," reports Haigh, "called it a Tom Collins with champagne instead of club soda. Vive la difference!"',
      instructions: "Shake gin, lemon juice and syrup with ice, strain into champagne flute and top with champagne, lemon twist and cherry.",
      template: false,
      attributed_to: "",
      posted_by: 1,
      variant_of: null
    },
    // {id:,
    //   name: "",
    //   description: "",
    //   instructions: "",
    //   template: false,
    //   attributed_to: "",
    //   posted_by: ,
    //   variant_of: null
    // },

  ];

    // Deletes ALL existing entries
    return knex('recipes').del()
      .then(() => {
        return knex('recipes').insert(data);})
      .then(() => {
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))");
      });
  };
