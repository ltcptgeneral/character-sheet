export let combatModifiers = [
	{
		category: "Saves",
		items: [
			{
				name: "Resilience",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.END) + e.training + (e.mb * e.mastery); }

			},
			{
				name: "Reflex",
				type: "full",
				value: function (e) { return Math.max(e.AGI, e.WIT) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Resolve",
				type: "full",
				value: function (e) { return Math.max(e.INT, e.CHA) + e.training + (e.mb * e.mastery); }
			}
		]
	},
	{
		category: "Weapon",
		items: [
			{
				name: "Simple",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Brawl",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Bludgeon",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Axe",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Polearm",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Sword",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Archery",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Firearm",
				type: "full",
				value: function (e) { return Math.max(e.STR, e.AGI) + e.training + (e.mb * e.mastery); }
			}
		]
	},
	{
		category: "Armor",
		items: [
			{
				name: "Unarmored",
				type: "training-only",
				value: function (e) { return }
			},
			{
				name: "Light",
				type: "training-only",
				value: function (e) { return }
			},
			{
				name: "Medium",
				type: "training-only",
				value: function (e) { return }
			},
			{
				name: "Heavy",
				type: "training-only",
				value: function (e) { return }
			}
		]
	}
]

export let rpModifiers = [
	{
		category: "Skills",
		items: [
			{
				name: "Athletics",
				type: "full",
				value: function (e) { return e.STR + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Fortitude",
				type: "full",
				value: function (e) { return e.END + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Acrobatics",
				type: "full",
				value: function (e) { return e.AGI + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Stealth",
				type: "full",
				value: function (e) { return e.AGI + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Thievery",
				type: "full",
				value: function (e) { return e.AGI + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Animal_Handling",
				display: "Animal Handling",
				type: "full",
				value: function (e) { return e.WIT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Intuition",
				type: "full",
				value: function (e) { return e.WIT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Perception",
				type: "full",
				value: function (e) { return e.WIT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Streetwise",
				type: "full",
				value: function (e) { return e.WIT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Survival",
				type: "full",
				value: function (e) { return e.WIT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Arcana",
				type: "full",
				value: function (e) { return e.INT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Crafting",
				type: "full",
				value: function (e) { return e.INT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Investigation",
				type: "full",
				value: function (e) { return e.INT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Medicine",
				type: "full",
				value: function (e) { return e.INT + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Deception",
				type: "full",
				value: function (e) { return e.CHA + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Intimidation",
				type: "full",
				value: function (e) { return e.CHA + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Performance",
				type: "full",
				value: function (e) { return e.CHA + e.training + (e.mb * e.mastery); }
			},
			{
				name: "Persuasion",
				type: "full",
				value: function (e) { return e.CHA + e.training + (e.mb * e.mastery); }
			}
		]
	}
]

export let features = [
	{
		name: "Core Species",
		level: 1
	},
	{
		name: "Species",
		level: 1
	},
	{
		name: "Cornerstone",
		level: 1
	},
	{
		name: "Cornerstone",
		level: 1
	},
	{
		name: "Novice",
		level: 1
	},
	{
		name: "Novice",
		level: 2
	},
	{
		name: "Novice",
		level: 3
	},
	{
		name: "Novice",
		level: 4
	},
	{
		name: "Apprentice",
		level: 5
	},
	{
		name: "Apprentice",
		level: 6
	},
	{
		name: "Apprentice",
		level: 7
	},
	{
		name: "Journeyman",
		level: 9
	},
	{
		name: "Journeyman",
		level: 10
	},
	{
		name: "Journeyman",
		level: 11
	},
	{
		name: "Expert",
		level: 13
	},
	{
		name: "Expert",
		level: 14
	},
	{
		name: "Expert",
		level: 15
	},
	{
		name: "Master",
		level: 17
	},
	{
		name: "Master",
		level: 18
	},
	{
		name: "Capstone",
		level: 20
	}
	
]

export let spellSlots = 20