const wildRiftChampions = [
    {
        id: 1,
        name: "Garen",
        img: "#",
        damage: 2,
        survive: 3,
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
            "Solo Lane"
        ]
    },
    {
        id: 2,
        name: "Ahri",
        img: "#",
        damage: 3,
        survive: 1,
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
            "Mid Lane"
        ]
    },
    {
        id: 3,
        name: "Zed",
        img: "#",
        damage: 3,
        survive: 1,
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
            "Mid Lane",
            "Solo Lane"
        ]
    },
    {
        id: 4,
        name: "Jax",
        img: "#",
        damage: 3,
        survive: 2,
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
            "Solo Lane"
        ]
    },
    {
        id: 5,
        name: "Sona",
        img: "#",
        damage: 2,
        survive: 1,
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
        img: "#",
        damage: 3,
        survive: 2,
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
        img: "#",
        damage: 2,
        survive: 2,
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
        img: "#",
        damage: 2,
        survive: 2,
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
            "Solo Lane"
        ]
    },
    {
        id: 9,
        name: "Dr. Mundo",
        img: "#",
        damage: 2,
        survive: 3,
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
            "Solo Lane",
            "Jungle"
        ]
    },
    {
        id: 10,
        name: "Nasus",
        img: "#",
        damage: 2,
        survive: 3,
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
            "Solo Lane"
        ]
    },
    {
        id: 11,
        name: "Miss Fortune",
        img: "#",
        damage: 3,
        survive: 1,
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
            "Dragon Lane"
        ]
    },
    {
        id: 12,
        name: "Master Yi",
        img: "#",
        damage: 3,
        survive: 1,
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
        img: "#",
        damage: 3,
        survive: 2,
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
            "Solo Lane"
        ]
    },
    {
        id: 14,
        name: "Janna",
        img: "#",
        damage: 1,
        survive: 1,
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
        img: "#",
        damage: 3,
        survive: 1,
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
            "Dragon Lane"
        ]
    },
    {
        id: 16,
        name: "Alistar",
        img: "#",
        damage: 1,
        survive: 3,
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
        img: "#",
        damage: 1,
        survive: 3,
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
            "Solo Lane",
            "Mid Lane"
        ]
    },
    {
        id: 18,
        name: "Fizz",
        img: "#",
        damage: 3,
        survive: 1,
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
            "Mid Lane",
            "Solo Lane",
            "Jungle"
        ]
    },
    {
        id: 19,
        name: "Ziggs",
        img: "#",
        damage: 3,
        survive: 1,
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
            "Mid Lane"
        ]
    },
    {
        id: 20,
        name: "Gragas",
        img: "#",
        damage: 2,
        survive: 3,
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
            "Solo Lane"
        ]
    }
]
