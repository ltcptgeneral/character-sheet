window.addEventListener("DOMContentLoaded", init);

let combatModifiers = [
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

let rpModifiers = [
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

let features = [
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

function init () {
	buildModifiers("#combat-modifiers", combatModifiers);
	window.setInterval(() => { calculateModifiers(combatModifiers) }, 250);
	buildModifiers("#rp-modifiers", rpModifiers);
	calculateModifiers(rpModifiers);
	window.setInterval(() => { calculateModifiers(rpModifiers) }, 250);
	buildFeatures("#features", features);
}

function buildModifiers(container, data) {
	let area = document.querySelector(container);
	for (let i in data) {
		let category = data[i];
		let categoryDiv = document.createElement("div");
		area.append(categoryDiv);
		categoryDiv.style = "display: contents;";
		categoryDiv.innerHTML = `<p style="grid-column: 1 / span 4;"><b>${category.category}</b></p>`;
		for (let j in data[i].items) {
			let item = data[i].items[j];
			if (item.type === "full") {
				categoryDiv.innerHTML += `
					<div style="display: contents;">
						<p>${item.display ? item.display : item.name}</p>
						<label>Training<input id="${category.category}-${item.name}-training" name="${category.category}-${item.name}-training" type="number"></label>
						<label>MB<input id="${category.category}-${item.name}-mb" name="${category.category}-${item.name}-mb" type="checkbox"></label>
						<output id="${category.category}-${item.name}-result"></output>
					</div>
				`;
			}
			else if (item.type === "training-only"){
				categoryDiv.innerHTML += `
					<div style="display: contents;">
						<p>${item.display ? item.display : item.name}</p>
						<label style="grid-column: 2 / span 3;">Training<input id="${category.category}-${item.name}-training" name="${category.category}-${item.name}-training" type="checkbox"></label>
						<input id="${category.category}-${item.name}-mb" name="${category.category}-${item.name}-mb" type="checkbox" hidden>
						<output class="none" id="${category.category}-${item.name}-result"></output>
					</div>
				`;
			}
		}
	}
}

function buildFeatures (container) {
	let area = document.querySelector(container);
	for (let i in features) {
		let feature = features[i];
		area.innerHTML += `
			<p>${feature.name}</p>
			<p>${feature.level}</p>
			<div class="grow-wrap">
				<textarea id="features-${i}" placeholder="Feature Name & Description" onInput="this.parentNode.dataset.replicatedValue = this.value" rows="1"></textarea>
			</div>
		`;
	}
}

function calculateModifiers (data) {
	for (let i in data) {
		let category = data[i];
		for (let j in data[i].items) {
			let item = data[i].items[j];
			setModifierVal(category.category, item.name, item.value);
		}
	}
}

function setModifierVal (category, name, value) {
	let e = {};
	e.STR = Number(document.querySelector("#str").value);
	e.END = Number(document.querySelector("#end").value);
	e.AGI = Number(document.querySelector("#agi").value);
	e.WIT = Number(document.querySelector("#wit").value);
	e.INT = Number(document.querySelector("#int").value);
	e.CHA = Number(document.querySelector("#cha").value);
	e.training = Number(document.querySelector(`#${category}-${name}-training`).value);
	e.mb = Number(document.querySelector(`#${category}-${name}-mb`).checked);
	e.mastery = Number(document.querySelector("#mastery").value);
	document.querySelector(`#${category}-${name}-result`).innerText = ` = ${value(e)}`;
}