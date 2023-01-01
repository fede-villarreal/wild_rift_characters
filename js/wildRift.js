const wildRiftChampions = [
    {
        id: 1,
        name: "Garen",
        damage: 2,
        toughness: 3,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Perseverance",
            "Decisive Strike",
            "Courage",
            "Judgment",
            "Demacian Justice"
        ],
        rol: [
            "Solo-Lane"
        ]
    },
    {
        id: 2,
        name: "Ahri",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Essence Theft",
            "Orb of Deception",
            "Fox-Fire",
            "Charm",
            "Spirit Rush"
        ],
        rol: [
            "Mid-Lane"
        ]
    },
    {
        id: 3,
        name: "Zed",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 3,
        abilities: [
            "Contemp for the Weak",
            "Razor Shuriken",
            "Living Shadow",
            "Shadow Slash",
            "Death Mark"
        ],
        rol: [
            "Mid-Lane",
            "Solo-Lane"
        ]
    },
    {
        id: 4,
        name: "Jax",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Relentless Assault",
            "Leap Strike",
            "Empower",
            "Counter Strike",
            "Grandmaster's Might"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    },
    {
        id: 5,
        name: "Sona",
        damage: 2,
        toughness: 1,
        utility: 3,
        difficulty: 1,
        abilities: [
            "Power Chord",
            "Hymn of Valor",
            "Aria of Perseverance",
            "Song of Celerity",
            "Crescendo"
        ],
        rol: [
            "Support"
        ]
    },
    {
        id: 6,
        name: "Shyvana",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Draconic Bloodline",
            "Twin Bite",
            "Burnout",
            "Flame Breath",
            "Dragon's Descent"
        ],
        rol: [
            "Jungle"
        ]
    },
    {
        id: 7,
        name: "Vi",
        damage: 2,
        toughness: 2,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Denting Blows",
            "Vault Breaker",
            "Blast Shield",
            "Recentless Force",
            "Cease and Desist"
        ],
        rol: [
            "Jungle"
        ]
    },
    {
        id: 8,
        name: "Jarvan IV",
        damage: 2,
        toughness: 2,
        utility: 2,
        difficulty: 1,
        abilities: [
            "Martial Cadence",
            "Dragon Strike",
            "Golden Aegis",
            "Demacian Standard",
            "Cataclysm"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    },
    {
        id: 9,
        name: "Dr Mundo",
        damage: 2,
        toughness: 3,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Goes Where He Pleases",
            "Infected Bonesaw",
            "Heart Zapper",
            "Blunt Force Trauma",
            "Maximum Dosage"
        ],
        rol: [
            "Solo-Lane",
            "Jungle"
        ]
    },
    {
        id: 10,
        name: "Nasus",
        damage: 2,
        toughness: 3,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Soul Eater",
            "Siphoning Strike",
            "Wither",
            "Spirit Fire",
            "Fury of the Sands"
        ],
        rol: [
            "Solo-Lane"
        ]
    },
    {
        id: 11,
        name: "Miss Fortune",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Love Tap",
            "Double Up",
            "Strut",
            "Make it Rain",
            "Bullet Time"
        ],
        rol: [
            "Dragon-Lane"
        ]
    },
    {
        id: 12,
        name: "Master Yi",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Double Strike",
            "Alpha Strike",
            "Meditate",
            "Wuju Style",
            "Highlander"
        ],
        rol: [
            "Jungle"
        ]
    },
    {
        id: 13,
        name: "Graves",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 2,
        abilities: [
            "New Destiny",
            "End of the Line",
            "Smoke Screen",
            "Quickdraw",
            "Collateral Damage"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    },
    {
        id: 14,
        name: "Janna",
        damage: 1,
        toughness: 1,
        utility: 3,
        difficulty: 1,
        abilities: [
            "Tailwind",
            "Howling Gale",
            "Zephyr",
            "Eye of the Storm",
            "Moonsoon"
        ],
        rol: [
            "Support"
        ]
    },
    {
        id: 15,
        name: "Ashe",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Frost Shot",
            "Ranger's Focus",
            "Volley",
            "Hawkshot",
            "Enchanted Crystal Arow"
        ],
        rol: [
            "Dragon-Lane"
        ]
    },
    {
        id: 16,
        name: "Alistar",
        damage: 1,
        toughness: 3,
        utility: 2,
        difficulty: 1,
        abilities: [
            "Triunmphant Roar",
            "Pulverize",
            "Headbutt",
            "Trample",
            "Unbreakable Will"
        ],
        rol: [
            "Support"
        ]
    },
    {
        id: 17,
        name: "Malphite",
        damage: 1,
        toughness: 3,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Granite Shield",
            "Seismic Shard",
            "Thunderclap",
            "Ground Slam",
            "Unstoppable Force"
        ],
        rol: [
            "Support",
            "Solo-Lane",
            "Mid-Lane"
        ]
    },
    {
        id: 18,
        name: "Fizz",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Seastone Trident",
            "Urchin Strike",
            "Rending Wave",
            "Playful / Trickster",
            "Chum the Waters"
        ],
        rol: [
            "Mid-Lane",
            "Solo-Lane",
            "Jungle"
        ]
    },
    {
        id: 19,
        name: "Ziggs",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Short Fuse",
            "Bouncing Bomb",
            "Satchel Charge",
            "Hexplosive Minefield",
            "Mega Inferno Bomb"
        ],
        rol: [
            "Mid-Lane"
        ]
    },
    {
        id: 20,
        name: "Gragas",
        damage: 2,
        toughness: 3,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Happy Hour",
            "Barrel Roll",
            "Drunken Rage",
            "Body Slam",
            "Explosive Cask"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    },
    {
        id: 21,
        name: "Nami",
        damage: 2,
        toughness: 1,
        utility: 3,
        difficulty: 2,
        abilities: [
            "Surging Tides",
            "Aqua Prison",
            "Ebb and Flow",
            "Tidecaller's Blessing",
            "Tidal Wave"
        ],
        rol: [
            "Support"
        ]
    },
    {
        id: 22,
        name: "Varus",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Living Vengeance",
            "Piercing Arrow",
            "Blighted Quiver",
            "Hail of Arrows",
            "Chain of Corruption"
        ],
        rol: [
            "Dragon-Lane"
        ]
    },
    {
        id: 23,
        name: "Singed",
        damage: 2,
        toughness: 3,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Noxious Slipstream",
            "Poison Trail",
            "Mega Adhesive",
            "Fling",
            "Insanity Potion"
        ],
        rol: [
            "Solo-Lane"
        ]
    },
    {
        id: 24,
        name: "Soraka",
        damage: 1,
        toughness: 1,
        utility: 3,
        difficulty: 1,
        abilities: [
            "Salvation",
            "Starcall",
            "Astral Infusion",
            "Equinox",
            "Wish"
        ],
        rol: [
            "Support"
        ]
    },
    {
        id: 25,
        name: "Ezreal",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Rising Spell Force",
            "Mistic Shot",
            "Essence Flux",
            "Arcane Shift",
            "Trueshot Barrage"
        ],
        rol: [
            "Dragon-Lane"
        ]
    },
    {
        id: 26,
        name: "Olaf",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 2,
        abilities: [
            "Berserker Rage",
            "Undertow",
            "Vicious Strike",
            "Reckless Swing",
            "Ragnarok"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    },
    {
        id: 27,
        name: "Yasuo",
        damage: 3,
        toughness: 1,
        utility: 1,
        difficulty: 3,
        abilities: [
            "Way of the Wanderer",
            "Steel Tempest",
            "Wind Wall",
            "Sweeping Blade",
            "Last Breath"
        ],
        rol: [
            "Mid-Lane",
            "Solo-Lane"
        ]
    },
    {
        id: 28,
        name: "Annie",
        damage: 3,
        toughness: 1,
        utility: 2,
        difficulty: 1,
        abilities: [
            "Pyromania",
            "Desintegrate",
            "Incinerate",
            "Molten Shield",
            "Summon: Tibbers"
        ],
        rol: [
            "Mid-Lane"
        ]
    },
    {
        id: 29,
        name: "Camille",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 3,
        abilities: [
            "Adaptative Defenses",
            "Precision Protocol",
            "Tactical Sweep",
            "Hookshot",
            "The Hextech Ultimatum"
        ],
        rol: [
            "Solo-Lane",
            "Jungle"
        ]
    },
    {
        id: 30,
        name: "Tryndamere",
        damage: 3,
        toughness: 2,
        utility: 1,
        difficulty: 1,
        abilities: [
            "Battle Fury",
            "Bloodlust",
            "Mocking Shout",
            "Spinning Slash",
            "Undying Rage"
        ],
        rol: [
            "Jungle",
            "Solo-Lane"
        ]
    }
]

